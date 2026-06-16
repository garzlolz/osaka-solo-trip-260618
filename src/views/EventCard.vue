<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  event:  { type: Object,  required: true },
  isLast: { type: Boolean, default: false },
});

const NOTE_STYLE = {
  warn: { bg: "bg-amber-50 dark:bg-amber-950/30",   border: "border-amber-200 dark:border-amber-900/50",   text: "text-amber-800 dark:text-amber-300",   icon: "warning" },
  ok:   { bg: "bg-gray-50 dark:bg-slate-800/50",    border: "border-gray-200 dark:border-slate-700/50",    text: "text-gray-600 dark:text-slate-400",    icon: "cancel" },
  tip:  { bg: "bg-green-50 dark:bg-emerald-950/30",   border: "border-green-200 dark:border-emerald-900/50",   text: "text-green-700 dark:text-emerald-300",   icon: "check_circle" },
  info: { bg: "bg-blue-50/60 dark:bg-blue-950/30", border: "border-blue-100 dark:border-blue-900/50",    text: "text-blue-700 dark:text-blue-300",    icon: "info" },
};

const renderMarkdownLinks = (text) => {
  if (!text) return "";
  return text.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-osk-teal hover:underline font-bold">$1</a>'
  );
};

const noteStyle = (type) => NOTE_STYLE[type] || NOTE_STYLE.info;
const isMapVisible = ref(false);
const activeMapIdx = ref(0);
const isMapLoading = ref(true);

// 從文字中解析提取地圖連結
const maps = computed(() => {
  const list = [];
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g;
  
  const searchSources = [];
  if (props.event.activity) searchSources.push(props.event.activity);
  if (props.event.todo) searchSources.push(props.event.todo);
  if (props.event.notes) {
    props.event.notes.forEach(n => {
      if (n.text) searchSources.push(n.text);
    });
  }
  
  searchSources.forEach(source => {
    let match;
    regex.lastIndex = 0;
    while ((match = regex.exec(source)) !== null) {
      const name = match[1];
      const link = match[2];
      if (link.includes("maps")) {
        if (!list.some(item => item.link === link)) {
          let query = name;
          try {
            const urlObj = new URL(link);
            const qParam = urlObj.searchParams.get("q");
            if (qParam) {
              query = qParam;
            } else {
              const match3d4d = link.match(/!3d(-?[0-9.]+)!4d(-?[0-9.]+)/);
              const matchAt = link.match(/@(-?[0-9.]+),(-?[0-9.]+)/);
              if (match3d4d) {
                query = `${match3d4d[1]},${match3d4d[2]}`;
              } else if (matchAt) {
                query = `${matchAt[1]},${matchAt[2]}`;
              }
            }
          } catch (e) {
            const match3d4d = link.match(/!3d(-?[0-9.]+)!4d(-?[0-9.]+)/);
            const matchAt = link.match(/@(-?[0-9.]+),(-?[0-9.]+)/);
            if (match3d4d) {
              query = `${match3d4d[1]},${match3d4d[2]}`;
            } else if (matchAt) {
              query = `${matchAt[1]},${matchAt[2]}`;
            }
          }
          
          list.push({
            name,
            query,
            link
          });
        }
      }
    }
  });
  
  return list;
});

const toggleMap = (idx) => {
  if (isMapVisible.value && activeMapIdx.value === idx) {
    isMapVisible.value = false;
  } else {
    isMapLoading.value = true;
    activeMapIdx.value = idx;
    isMapVisible.value = true;
  }
};

const handleMapLoaded = () => {
  isMapLoading.value = false;
};

const currentMap = computed(() => maps.value[activeMapIdx.value] || null);

const mapEmbedUrl = computed(() => {
  const map = currentMap.value;
  return map ? `https://maps.google.com/maps?q=${encodeURIComponent(map.query)}&t=&z=15&ie=UTF8&iwloc=&output=embed` : null;
});

// Lightbox state & methods
const activeLightboxImage = ref(null);
const openLightbox = (img) => {
  activeLightboxImage.value = img;
  document.body.style.overflow = "hidden";
};
const closeLightbox = () => {
  activeLightboxImage.value = null;
  document.body.style.overflow = "";
};
</script>

<template>
  <div class="relative flex gap-2 sm:gap-4">
    <!-- 時間軸線 -->
    <div class="flex flex-col items-center flex-shrink-0 w-6 sm:w-10">
      <div class="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-osk-orange border-2 border-white shadow-sm mt-5 flex-shrink-0 z-10"></div>
      <div v-if="!isLast" class="w-0.5 flex-1 bg-osk-orange/20 mt-1"></div>
    </div>

    <!-- 卡片 -->
    <div class="flex-1 mb-3 sm:mb-4 min-w-0">
      <div class="bg-white dark:bg-slate-900 rounded-2xl border-2 border-white dark:border-slate-800 shadow-card hover:border-osk-orange/20 dark:hover:border-osk-orange/40 hover:shadow-card-hover transition-all p-3 sm:p-4">

        <!-- 時間標籤 -->
        <div class="mb-2">
          <span class="text-xs font-black text-osk-orange bg-osk-orange/10 dark:bg-osk-orange/20 border border-osk-orange/20 px-2.5 py-0.5 rounded-full">
            {{ event.time }}
          </span>
        </div>

        <!-- 活動名稱 -->
        <p class="font-bold text-osk-navy dark:text-slate-100 text-sm leading-snug mb-2" v-html="renderMarkdownLinks(event.activity)"></p>

        <!-- 備註 -->
        <div v-if="event.notes && event.notes.length" class="space-y-1.5 mb-2">
          <div
            v-for="(note, i) in event.notes"
            :key="i"
            :class="['flex items-start gap-1.5 text-xs rounded-xl px-2.5 sm:px-3 py-2 border', noteStyle(note.type).bg, noteStyle(note.type).border, noteStyle(note.type).text]"
          >
            <span class="material-icons flex-shrink-0 mt-px text-base leading-none">{{ noteStyle(note.type).icon }}</span>
            <span class="font-medium leading-snug" v-html="renderMarkdownLinks(note.text)"></span>
          </div>
        </div>

        <!-- 待辦 -->
        <div v-if="event.todo" class="mt-2 pt-2 border-t border-dashed border-osk-amber/40 dark:border-slate-800">
          <p
            v-for="(line, i) in event.todo.split('\\n')"
            :key="i"
            class="text-xs font-semibold text-osk-darkOrange dark:text-amber-500 flex items-start gap-1"
          >
            <span class="material-icons shrink-0 text-sm leading-none">push_pin</span>
            <span v-html="renderMarkdownLinks(line)"></span>
          </p>
        </div>

        <!-- 附圖（點擊放大） -->
        <div v-if="event.images && event.images.length" class="mt-3 space-y-2">
          <div
            v-for="img in event.images"
            :key="img.src"
            class="rounded-xl overflow-hidden border border-gray-100 cursor-zoom-in group relative"
            @click="openLightbox(img)"
          >
            <img :src="img.src" :alt="img.alt" class="w-full object-contain max-h-64 bg-gray-50 group-hover:opacity-95 transition-opacity" loading="lazy" />
            <div class="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="material-icons text-[10px] leading-none">zoom_in</span>
              <span>點擊放大</span>
            </div>
            <p class="text-[11px] text-osk-navy/50 px-3 py-2 leading-snug">{{ img.alt }}</p>
          </div>
        </div>

        <!-- 地圖 iframe -->
        <Transition name="map-fade">
          <div v-show="isMapVisible" class="mt-3 rounded-xl overflow-hidden border-2 border-osk-teal/20 relative bg-gray-50 dark:bg-slate-950">
            <!-- Map Skeleton Loader -->
            <div
              v-if="isMapLoading"
              class="absolute inset-0 bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center gap-2 animate-pulse z-20"
              style="height: 200px;"
            >
              <span class="material-icons text-osk-teal text-3xl animate-bounce">map</span>
              <span class="text-xs font-bold text-osk-navy/40 dark:text-slate-400">載入 Google 地圖中...</span>
            </div>

            <iframe
              v-show="isMapVisible"
              :src="mapEmbedUrl"
              width="100%"
              height="200"
              frameborder="0"
              scrolling="no"
              loading="lazy"
              class="w-full block relative z-10"
              :title="currentMap ? currentMap.name : ''"
              @load="handleMapLoaded"
            ></iframe>
            <div class="bg-osk-sand dark:bg-slate-900 py-2 px-3 text-xs flex justify-end border-t border-osk-teal/10 dark:border-slate-800 relative z-10">
              <a
                v-if="currentMap"
                :href="currentMap.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-osk-teal font-bold hover:text-osk-navy dark:hover:text-slate-100 transition-colors"
              >開啟 {{ currentMap.name }} Google Maps →</a>
            </div>
          </div>
        </Transition>

        <!-- 地圖按鈕群 (標籤) -->
        <div v-if="maps.length" class="mt-3 flex flex-wrap gap-2 justify-end">
          <button
            v-for="(map, idx) in maps"
            :key="idx"
            @click="toggleMap(idx)"
            :class="[
              'flex items-center gap-1 text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-full border-2 transition-all',
              isMapVisible && activeMapIdx === idx
                ? 'bg-osk-teal text-white border-osk-teal shadow-sm scale-102'
                : 'bg-white dark:bg-slate-800 text-osk-teal border-osk-teal/30 dark:border-osk-teal/50 hover:border-osk-teal hover:bg-osk-teal/5 dark:hover:bg-osk-teal/10'
            ]"
          >
            <span class="material-icons text-sm leading-none">map</span>
            <span>{{ map.name }}</span>
          </button>
        </div>

      </div>
    </div>
  </div>

  <!-- Lightbox Modal -->
  <Transition name="lightbox-fade">
    <div
      v-if="activeLightboxImage"
      class="fixed inset-0 z-50 bg-black/90 flex flex-col justify-center items-center p-4 cursor-zoom-out"
      @click="closeLightbox"
    >
      <!-- 頂部關閉與描述 -->
      <div class="absolute top-0 inset-x-0 bg-gradient-to-b from-black/60 to-transparent p-4 flex justify-between items-center z-10">
        <p class="text-white text-xs sm:text-sm font-bold truncate pr-4">{{ activeLightboxImage.alt }}</p>
        <button
          @click.stop="closeLightbox"
          class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
        >
          <span class="material-icons text-base">close</span>
        </button>
      </div>

      <!-- 圖片本體 -->
      <div class="max-w-full max-h-[80vh] flex items-center justify-center relative select-none">
        <img
          :src="activeLightboxImage.src"
          :alt="activeLightboxImage.alt"
          class="max-w-full max-h-[80vh] object-contain rounded shadow-2xl transition-transform duration-300"
          @click.stop
        />
      </div>

      <!-- 提示字樣 -->
      <p class="text-white/40 text-[10px] mt-4 font-semibold select-none">點擊任意空白處關閉圖片</p>
    </div>
  </Transition>
</template>

<style scoped>
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.25s ease;
}
.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}
</style>

