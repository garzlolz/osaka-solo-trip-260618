<script setup>
import { ref, onMounted, onUnmounted } from "vue";

defineProps({
  route: { type: Object, required: true },
});

const renderMarkdownLinks = (text) => {
  if (!text) return "";
  return text.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-osk-teal hover:underline font-bold">$1</a>'
  );
};

const isMobile = ref(window.innerWidth < 768);
const handleResize = () => { isMobile.value = window.innerWidth < 768; };
onMounted(() => window.addEventListener("resize", handleResize));
onUnmounted(() => window.removeEventListener("resize", handleResize));

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
  <div class="bg-osk-sand dark:bg-slate-800/50 rounded-2xl border-2 border-osk-amber/30 dark:border-amber-900/30 p-4 sm:p-5 mt-4">
    <h4 class="text-sm font-black text-osk-navy dark:text-slate-100 mb-3 flex items-center gap-2">
      <span class="material-icons text-base leading-none text-osk-teal">train</span>
      {{ route.title }}
    </h4>

    <!-- 手機版：卡片堆疊式佈局 -->
    <div v-if="isMobile" class="space-y-2.5">
      <div
        v-for="seg in route.segments"
        :key="seg.segment"
        class="bg-white dark:bg-slate-900/70 rounded-xl border border-osk-amber/20 dark:border-slate-700/50 p-3 space-y-1.5"
      >
        <!-- 段號 + 路線名 -->
        <div class="flex items-center gap-2">
          <span class="flex-shrink-0 w-6 h-6 rounded-lg bg-osk-orange text-white text-xs font-black flex items-center justify-center">
            {{ seg.segment }}
          </span>
          <span class="text-sm font-bold text-osk-navy dark:text-slate-100 leading-snug" v-html="renderMarkdownLinks(seg.route)"></span>
        </div>

        <!-- 出發地 → 目的地 -->
        <div class="flex items-center gap-1.5 text-xs pl-8">
          <span class="text-osk-navy/60 dark:text-slate-400" v-html="renderMarkdownLinks(seg.from)"></span>
          <span class="material-icons text-osk-orange text-sm leading-none">arrow_forward</span>
          <span class="text-osk-navy/60 dark:text-slate-400" v-html="renderMarkdownLinks(seg.to)"></span>
        </div>

        <!-- 時間 + 費用 -->
        <div class="flex items-center gap-3 pl-8 text-xs">
          <span class="flex items-center gap-1">
            <span class="material-icons text-xs leading-none text-osk-teal">schedule</span>
            <span class="font-bold text-osk-teal">{{ seg.duration }}</span>
          </span>
          <span v-if="seg.cost" class="flex items-center gap-1">
            <span class="material-icons text-xs leading-none text-osk-darkOrange">payments</span>
            <span class="font-bold text-osk-darkOrange">{{ seg.cost }}</span>
          </span>
        </div>

        <!-- 備註 -->
        <div v-if="seg.note" class="pl-8 text-[11px] text-osk-navy/50 dark:text-slate-500 leading-snug" v-html="renderMarkdownLinks(seg.note)"></div>

        <!-- 示意圖按鈕 (手機版) -->
        <div v-if="seg.images && seg.images.length" class="mt-2 pl-8 flex flex-wrap gap-2">
          <button
            v-for="(img, idx) in seg.images"
            :key="idx"
            @click="openLightbox(img)"
            class="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-xl bg-osk-teal/10 dark:bg-osk-teal/20 text-osk-teal border border-osk-teal/20 hover:bg-osk-teal/20 active:scale-98 transition-all"
          >
            <span class="material-icons text-xs leading-none">map</span>
            <span>查看示意圖: {{ img.alt }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 桌面版：橫向表格 -->
    <div v-else class="overflow-x-auto -mx-1">
      <table class="w-full text-xs border-collapse">
        <thead>
          <tr class="text-osk-navy/50 dark:text-slate-400 border-b-2 border-osk-amber/30 dark:border-amber-900/30">
            <th class="text-left py-2 px-2 font-bold w-8">#</th>
            <th class="text-left py-2 px-2 font-bold">路線</th>
            <th class="text-left py-2 px-2 font-bold">出發地 / 上車站</th>
            <th class="text-left py-2 px-2 font-bold">目的地 / 下車站</th>
            <th class="text-left py-2 px-2 font-bold whitespace-nowrap">時間</th>
            <th class="text-left py-2 px-2 font-bold">費用</th>
            <th class="text-left py-2 px-2 font-bold">備註</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="seg in route.segments"
            :key="seg.segment"
            class="border-b border-osk-amber/20 dark:border-slate-700/30 hover:bg-osk-amber/10 dark:hover:bg-slate-800/50 transition-colors"
          >
            <td class="py-2.5 px-2 font-black text-osk-orange">{{ seg.segment }}</td>
            <td class="py-2.5 px-2 text-osk-navy dark:text-slate-200 font-medium leading-snug" v-html="renderMarkdownLinks(seg.route)"></td>
            <td class="py-2.5 px-2 text-osk-navy/70 dark:text-slate-400 whitespace-nowrap" v-html="renderMarkdownLinks(seg.from)"></td>
            <td class="py-2.5 px-2 text-osk-navy/70 dark:text-slate-400 whitespace-nowrap" v-html="renderMarkdownLinks(seg.to)"></td>
            <td class="py-2.5 px-2 text-osk-teal font-bold whitespace-nowrap">{{ seg.duration }}</td>
            <td class="py-2.5 px-2 text-osk-darkOrange font-bold whitespace-nowrap">{{ seg.cost || '—' }}</td>
            <td class="py-2.5 px-2 text-osk-navy/50 dark:text-slate-500">
              <div v-html="renderMarkdownLinks(seg.note)"></div>
              <!-- 示意圖按鈕 (桌面版) -->
              <div v-if="seg.images && seg.images.length" class="mt-1 flex flex-wrap gap-1">
                <button
                  v-for="(img, idx) in seg.images"
                  :key="idx"
                  @click="openLightbox(img)"
                  class="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-lg bg-osk-teal/10 dark:bg-osk-teal/20 text-osk-teal border border-osk-teal/20 hover:bg-osk-teal/20 transition-all animate-fade-in"
                  :title="img.alt"
                >
                  <span class="material-icons text-[11px] leading-none">map</span>
                  <span>{{ img.alt }}</span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 總計 -->
    <div class="mt-3 pt-3 border-t-2 border-osk-amber/30 dark:border-amber-900/30 font-bold text-sm text-osk-navy dark:text-slate-200">
      {{ route.summary }}
    </div>

    <!-- 提示 -->
    <div v-if="route.tips && route.tips.length" class="mt-2 space-y-1">
      <p
        v-for="(tip, i) in route.tips"
        :key="i"
        class="text-xs text-osk-teal font-semibold flex items-center gap-1"
      >
        <span class="material-icons text-sm leading-none">check</span>
        <span>{{ tip }}</span>
      </p>
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

