<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  event:  { type: Object,  required: true },
  isLast: { type: Boolean, default: false },
});

const NOTE_STYLE = {
  warn: { bg: "bg-amber-50",   border: "border-amber-200",   text: "text-amber-800",   icon: "⚠️" },
  ok:   { bg: "bg-gray-50",    border: "border-gray-200",    text: "text-gray-600",    icon: "❌" },
  tip:  { bg: "bg-green-50",   border: "border-green-200",   text: "text-green-700",   icon: "✔" },
  info: { bg: "bg-blue-50/60", border: "border-blue-100",    text: "text-blue-700",    icon: "ℹ" },
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
          list.push({
            name,
            query: name,
            link
          });
        }
      }
    }
  });
  
  // 若未解析出 Google Maps 連結，則回退至傳統欄位 mapLink/mapQuery
  if (list.length === 0 && props.event.mapLink) {
    const plainName = props.event.activity.replace(/\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g, '$1');
    list.push({
      name: plainName,
      query: props.event.mapQuery || plainName,
      link: props.event.mapLink
    });
  }
  
  return list;
});

const toggleMap = (idx) => {
  if (isMapVisible.value && activeMapIdx.value === idx) {
    isMapVisible.value = false;
  } else {
    activeMapIdx.value = idx;
    isMapVisible.value = true;
  }
};

const currentMap = computed(() => maps.value[activeMapIdx.value] || null);

const mapEmbedUrl = computed(() => {
  const map = currentMap.value;
  return map ? `https://maps.google.com/maps?q=${encodeURIComponent(map.query)}&t=&z=15&ie=UTF8&iwloc=&output=embed` : null;
});
</script>

<template>
  <div class="relative flex gap-4">
    <!-- 時間軸線 -->
    <div class="flex flex-col items-center flex-shrink-0 w-10">
      <div class="w-3 h-3 rounded-full bg-osk-orange border-2 border-white shadow-sm mt-5 flex-shrink-0 z-10"></div>
      <div v-if="!isLast" class="w-0.5 flex-1 bg-osk-orange/20 mt-1"></div>
    </div>

    <!-- 卡片 -->
    <div class="flex-1 mb-4">
      <div class="bg-white rounded-2xl border-2 border-white shadow-card hover:border-osk-orange/20 hover:shadow-card-hover transition-all p-4">

        <!-- 時間標籤 + 地圖按鈕群 -->
        <div class="flex items-start justify-between gap-2 mb-2">
          <span class="text-xs font-black text-osk-orange bg-osk-orange/10 border border-osk-orange/20 px-2.5 py-0.5 rounded-full mt-1">
            {{ event.time }}
          </span>
          <div v-if="maps.length" class="flex flex-wrap gap-1 justify-end max-w-[70%]">
            <button
              v-for="(map, idx) in maps"
              :key="idx"
              @click="toggleMap(idx)"
              :class="[
                'flex items-center gap-1 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full border-2 transition-all',
                isMapVisible && activeMapIdx === idx
                  ? 'bg-osk-teal text-white border-osk-teal'
                  : 'bg-white text-osk-teal border-osk-teal/30 hover:border-osk-teal'
              ]"
            >
              <span>🗺</span>
              <span>{{ map.name }}</span>
            </button>
          </div>
        </div>

        <!-- 活動名稱 -->
        <p class="font-bold text-osk-navy text-sm sm:text-base leading-snug mb-2" v-html="renderMarkdownLinks(event.activity)"></p>

        <!-- 備註 -->
        <div v-if="event.notes && event.notes.length" class="space-y-1.5 mb-2">
          <div
            v-for="(note, i) in event.notes"
            :key="i"
            :class="['flex items-start gap-1.5 text-xs rounded-xl px-3 py-2 border', noteStyle(note.type).bg, noteStyle(note.type).border, noteStyle(note.type).text]"
          >
            <span class="flex-shrink-0 mt-px">{{ noteStyle(note.type).icon }}</span>
            <span class="font-medium leading-snug" v-html="renderMarkdownLinks(note.text)"></span>
          </div>
        </div>

        <!-- 待辦 -->
        <div v-if="event.todo" class="mt-2 pt-2 border-t border-dashed border-osk-amber/40">
          <p
            v-for="(line, i) in event.todo.split('\\n')"
            :key="i"
            class="text-xs font-semibold text-osk-darkOrange flex items-start gap-1"
          >
            <span class="shrink-0">📌</span>
            <span v-html="renderMarkdownLinks(line)"></span>
          </p>
        </div>

        <!-- 地圖 iframe -->
        <div v-show="isMapVisible" class="mt-3 rounded-xl overflow-hidden border-2 border-osk-teal/20">
          <iframe
            v-if="isMapVisible"
            :src="mapEmbedUrl"
            width="100%"
            height="240"
            frameborder="0"
            scrolling="no"
            loading="lazy"
            class="w-full block"
            :title="currentMap ? currentMap.name : ''"
          ></iframe>
          <div class="bg-osk-sand py-2 px-3 text-xs flex justify-end border-t border-osk-teal/10">
            <a
              v-if="currentMap"
              :href="currentMap.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-osk-teal font-bold hover:text-osk-navy transition-colors"
            >開啟 {{ currentMap.name }} Google Maps →</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
