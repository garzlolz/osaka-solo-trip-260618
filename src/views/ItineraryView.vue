<script setup>
import { ref, computed } from "vue";
import EventCard from "./EventCard.vue";
import RouteTable from "./RouteTable.vue";

const props = defineProps({
  days: { type: Array, required: true },
  bottleneck: { type: String, default: "" },
});

const activeDay = ref(props.days[0]?.day || 1);
const isRouteModalOpen = ref(false);

const currentDay = computed(() => {
  return props.days.find((d) => d.day === activeDay.value) || props.days[0];
});

const renderMarkdownLinks = (text) => {
  if (!text) return "";
  return text.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-osk-teal hover:underline font-bold">$1</a>'
  );
};

// 判斷是否為行動裝置
const isMobile = ref(window.innerWidth < 768);
const handleResize = () => { isMobile.value = window.innerWidth < 768; };

import { onMounted, onUnmounted } from "vue";
onMounted(() => window.addEventListener("resize", handleResize));
onUnmounted(() => window.removeEventListener("resize", handleResize));
</script>

<template>
  <div class="px-3 sm:px-4">

    <!-- Day 頁籤 -->
    <div class="flex justify-center overflow-x-auto scrollbar-hide pb-3 mb-4 sm:mb-6 -mx-1">
      <div class="flex gap-2 sm:gap-2 w-max px-1">
        <button
          day="day"
          v-for="day in days"
          :key="day.day"
          @click="activeDay = day.day; isRouteModalOpen = false"
          :class="[
            'flex-shrink-0 flex flex-col items-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border-2 text-sm font-bold transition-all',
            activeDay === day.day
              ? 'bg-osk-orange text-white border-osk-darkOrange shadow-card scale-105'
              : 'bg-white/70 dark:bg-slate-800/70 text-osk-navy/60 dark:text-slate-300 border-white dark:border-slate-800 hover:bg-white dark:hover:bg-slate-700 hover:text-osk-navy dark:hover:text-slate-100 hover:-translate-y-0.5 hover:shadow-card-hover'
          ]"
        >
          <span class="text-[10px] uppercase opacity-70 tracking-wide">Day {{ day.day }}</span>
          <span class="text-sm sm:text-base">{{ day.date.split('（')[0] }}</span>
        </button>
      </div>
    </div>

    <!-- 當日主題 -->
    <div class="text-center mb-4 sm:mb-6">
      <div class="inline-flex items-center gap-2 sm:gap-3 bg-white/80 dark:bg-slate-900/80 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-white dark:border-slate-800 shadow-card">
        <h2 class="text-base sm:text-xl font-black text-osk-navy dark:text-slate-100">{{ currentDay.date }}</h2>
        <span class="text-xs sm:text-sm font-bold text-osk-orange bg-osk-orange/10 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-osk-orange/20">
          {{ currentDay.theme }}
        </span>
      </div>
    </div>

    <!-- 事件時間軸 -->
    <div class="max-w-2xl mx-auto animate-fade-in" :key="activeDay">
      <!-- 瓶頸提醒 banner (只有在 Day 4 顯示) -->
      <div
        v-if="currentDay.day === 4 && bottleneck"
        class="mb-4 sm:mb-6 bg-red-50/90 backdrop-blur-sm border-2 border-red-200 rounded-2xl p-3 sm:p-4 flex gap-2 sm:gap-3 text-red-900 shadow-card"
      >
        <span class="material-icons flex-shrink-0 text-xl leading-none text-red-500">warning</span>
        <div>
          <h4 class="font-black text-xs sm:text-sm text-red-950 mb-0.5">旅程核心瓶頸提醒 (Bottleneck)</h4>
          <p class="text-xs font-semibold leading-relaxed text-red-800">
            {{ bottleneck }}
          </p>
        </div>
      </div>

      <EventCard
        v-for="(event, idx) in currentDay.events"
        :key="idx"
        :event="event"
        :isLast="idx === currentDay.events.length - 1"
      />

      <!-- Day 1 子章節：INNN 圖片 & 風險 -->
      <template v-if="currentDay.subsections">
        <div v-for="(section, si) in currentDay.subsections" :key="si" class="mb-4 sm:mb-6 ml-8 sm:ml-14">

          <!-- 圖片型 -->
          <div v-if="section.type === 'images'" class="bg-white dark:bg-slate-900 rounded-2xl border-2 border-white dark:border-slate-800 shadow-card p-4 sm:p-5">
            <h3 class="text-sm font-black text-osk-navy dark:text-slate-100 mb-3">{{ section.title }}</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div v-for="img in section.images" :key="img.src" class="rounded-xl overflow-hidden border border-gray-100 dark:border-slate-800">
                <img
                  :src="img.src"
                  :alt="img.alt"
                  class="w-full object-contain max-h-64 bg-gray-50 dark:bg-slate-950"
                  loading="lazy"
                />
                <p class="text-[11px] text-osk-navy/50 dark:text-slate-400 px-3 py-2 leading-snug">{{ img.alt }}</p>
              </div>
            </div>
          </div>

          <!-- 風險型 -->
          <div v-else-if="section.type === 'risks'" class="bg-amber-50 dark:bg-amber-950/20 rounded-2xl border-2 border-amber-200 dark:border-amber-900/40 p-4 sm:p-5">
            <h3 class="text-sm font-black text-amber-800 dark:text-amber-400 mb-3">{{ section.title }}</h3>
            <div class="space-y-3">
              <div v-for="(item, ri) in section.items" :key="ri" class="flex gap-3">
                <span class="flex-shrink-0 w-5 h-5 mt-0.5 bg-osk-orange text-white text-xs font-black rounded-full flex items-center justify-center">{{ ri + 1 }}</span>
                <div>
                  <p class="text-sm font-bold text-amber-900 dark:text-amber-300">{{ item.title }}</p>
                  <p class="text-xs text-amber-700 dark:text-amber-400/90 mt-0.5 leading-relaxed whitespace-pre-line" v-html="renderMarkdownLinks(item.detail)"></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </template>
    </div>

    <!-- 交通與路線資訊浮動按鈕 (FAB) -->
    <div
      v-if="currentDay.routes && currentDay.routes.length"
      class="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40"
    >
      <button
        @click="isRouteModalOpen = !isRouteModalOpen"
        :class="[
          'flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-black shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 border-2 border-white/20 backdrop-blur-md text-xs sm:text-sm',
          isRouteModalOpen
            ? 'bg-osk-orange text-white'
            : 'bg-osk-teal text-white'
        ]"
      >
        <span class="material-icons text-lg leading-none">directions_transit</span>
        <span>{{ isRouteModalOpen ? '收起交通' : '交通資訊' }}</span>
      </button>
    </div>

    <!-- 桌面版：交通與路線資訊彈窗 (Modal) -->
    <Transition v-if="!isMobile" name="modal">
      <div
        v-if="isRouteModalOpen && currentDay.routes && currentDay.routes.length"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <!-- 遮罩 -->
        <div
          @click="isRouteModalOpen = false"
          class="absolute inset-0 bg-osk-navy/40 backdrop-blur-sm"
        ></div>

        <!-- 內容卡片 -->
        <div
          class="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-3xl border-4 border-white dark:border-slate-800 shadow-2xl max-w-xl w-full max-h-[80vh] overflow-y-auto p-6 z-10 modal-content"
        >
          <button
            @click="isRouteModalOpen = false"
            class="absolute top-4 right-4 text-sm font-black text-osk-navy/60 dark:text-slate-400 hover:text-osk-navy dark:hover:text-slate-100 hover:scale-110 transition-transform"
          >
            <span class="material-icons text-xl leading-none">close</span>
          </button>
          
          <div class="mb-4 pr-8">
            <h3 class="text-base font-black text-osk-navy dark:text-slate-100 flex items-center gap-2">
              <span class="material-icons text-base leading-none">directions_transit</span>
              <span>Day {{ currentDay.day }} 交通與路線資訊</span>
            </h3>
          </div>

          <div class="space-y-4">
            <RouteTable
              v-for="(route, ri) in currentDay.routes"
              :key="ri"
              :route="route"
            />
          </div>
        </div>
      </div>
    </Transition>

    <!-- 手機版：交通路線 Bottom Sheet -->
    <Transition v-if="isMobile" name="sheet">
      <div
        v-if="isRouteModalOpen && currentDay.routes && currentDay.routes.length"
        class="fixed inset-0 z-50"
      >
        <!-- 遮罩 -->
        <div
          @click="isRouteModalOpen = false"
          class="absolute inset-0 bg-osk-navy/40 backdrop-blur-sm"
        ></div>

        <!-- Bottom Sheet 內容 -->
        <div
          class="absolute bottom-0 left-0 right-0 bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl rounded-t-3xl border-t-4 border-white dark:border-slate-700 shadow-2xl max-h-[85vh] overflow-hidden z-10 sheet-content"
        >
          <!-- 拖曳指示器 -->
          <div class="flex justify-center pt-3 pb-1">
            <div class="w-10 h-1 bg-gray-300 dark:bg-slate-600 rounded-full"></div>
          </div>

          <!-- 標題列 -->
          <div class="flex items-center justify-between px-5 py-3 border-b border-gray-100 dark:border-slate-800">
            <h3 class="text-sm font-black text-osk-navy dark:text-slate-100 flex items-center gap-2">
              <span class="material-icons text-base leading-none text-osk-teal">directions_transit</span>
              <span>Day {{ currentDay.day }} 交通路線</span>
            </h3>
            <button
              @click="isRouteModalOpen = false"
              class="w-8 h-8 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center"
            >
              <span class="material-icons text-base leading-none text-osk-navy/60 dark:text-slate-400">close</span>
            </button>
          </div>

          <!-- 可滾動內容區 -->
          <div class="overflow-y-auto overscroll-contain px-4 pb-6" style="max-height: calc(85vh - 80px); padding-bottom: calc(24px + env(safe-area-inset-bottom, 0px));">
            <div class="space-y-4 pt-2">
              <RouteTable
                v-for="(route, ri) in currentDay.routes"
                :key="ri"
                :route="route"
              />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
