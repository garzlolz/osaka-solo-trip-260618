<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { TRIP_DATA } from "./js/data.js";
import { PlaneIcon } from "./components/Icons.js";
import BackgroundEffects from "./components/BackgroundEffects.vue";
import Tabs from "./components/Tabs.vue";
import ChecklistView from "./views/ChecklistView.vue";
import ItineraryView from "./views/ItineraryView.vue";
import ActionsView from "./views/ActionsView.vue";
import PackingView from "./views/PackingView.vue";

const activeTab = ref("itinerary");

const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0, departed: false });
let timer = null;

const updateCountdown = () => {
  const now  = new Date();
  const dest = new Date(TRIP_DATA.meta.departureDate);
  const diff = dest - now;

  if (diff <= 0) {
    countdown.value = { departed: true };
    return;
  }

  const totalSec = Math.floor(diff / 1000);
  countdown.value = {
    days:    Math.floor(totalSec / 86400),
    hours:   Math.floor((totalSec % 86400) / 3600),
    minutes: Math.floor((totalSec % 3600)  / 60),
    seconds: totalSec % 60,
    departed: false,
  };
};

const isDark = ref(localStorage.getItem("theme") === "dark");

const toggleDark = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
  
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});

onUnmounted(() => clearInterval(timer));
</script>

<template>
  <div class="min-h-screen min-h-[100dvh] bottom-nav-spacer relative z-10">

    <!-- 頂部標題列 -->
    <div class="sticky top-0 z-50 pt-2 sm:pt-4 px-3 sm:px-4 mb-4 sm:mb-6">
      <div class="max-w-4xl mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-card border-2 border-white dark:border-slate-800 px-3 sm:px-5 py-2.5 sm:py-3">

        <!-- 第一行：標題 + 倒數 + 操作按鈕 -->
        <div class="flex items-center justify-between gap-2 sm:gap-4">

          <!-- 標題 -->
          <h1 class="flex items-center gap-1.5 sm:gap-2 text-base sm:text-xl font-black text-osk-navy dark:text-slate-100 whitespace-nowrap min-w-0">
            <span class="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-osk-orange flex items-center justify-center shadow-card-hover flex-shrink-0">
              <span class="w-4 h-4 sm:w-5 sm:h-5 text-white"><PlaneIcon /></span>
            </span>
            <span class="truncate">{{ TRIP_DATA.meta.title }}</span>
          </h1>

          <!-- 倒數計時 -->
          <div class="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-osk-navy/70 dark:text-slate-300 flex-shrink-0">
            <template v-if="countdown.departed">
              <span class="bg-osk-green/20 text-osk-green px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-osk-green/30 text-[10px] sm:text-xs">旅程進行中 ✈️</span>
            </template>
            <template v-else>
              <span class="hidden sm:block text-osk-navy/50 dark:text-slate-400 mr-1">出發倒數</span>
              <span class="bg-osk-orange/15 text-osk-orange px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg border border-osk-orange/20 font-mono text-[10px] sm:text-xs">{{ countdown.days }}天</span>
              <span class="bg-osk-orange/15 text-osk-orange px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg border border-osk-orange/20 font-mono text-[10px] sm:text-xs">{{ String(countdown.hours).padStart(2,'0') }}時</span>
              <span class="bg-osk-orange/15 text-osk-orange px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg border border-osk-orange/20 font-mono text-[10px] sm:text-xs">{{ String(countdown.minutes).padStart(2,'0') }}分</span>
              <span class="bg-osk-amber/30 text-osk-darkOrange px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg border border-osk-amber/40 font-mono hidden sm:inline text-[10px] sm:text-xs">{{ String(countdown.seconds).padStart(2,'0') }}秒</span>
            </template>
          </div>

          <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <!-- CLUB JT 抽菸地圖按鈕 -->
            <a
              href="https://www.clubjt.jp/map/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl border border-gray-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 flex items-center justify-center text-osk-navy/60 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              title="CLUB JT 日本吸菸區地圖"
            >
              <span class="material-icons text-base sm:text-lg leading-none text-osk-orange">
                smoking_rooms
              </span>
            </a>

            <!-- 主題切換按鈕 -->
            <button
              @click="toggleDark"
              class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl border border-gray-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 flex items-center justify-center text-osk-navy/60 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              title="切換深淺色主題"
            >
              <span class="material-icons text-base sm:text-lg leading-none">
                {{ isDark ? 'light_mode' : 'dark_mode' }}
              </span>
            </button>

            <!-- 日期 / 更新時間 -->
            <div class="hidden md:flex flex-col items-end text-[11px] text-osk-navy/40 dark:text-slate-400 font-medium leading-tight">
              <span>{{ TRIP_DATA.meta.dateRange }}</span>
              <span>更新 {{ TRIP_DATA.meta.updatedAt }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 頁籤 + 內容 -->
    <div class="max-w-4xl mx-auto">
      <Tabs :activeTab="activeTab" @tab-change="activeTab = $event" />

      <div class="animate-fade-in" :key="activeTab">
        <ItineraryView  v-if="activeTab === 'itinerary'"  :days="TRIP_DATA.itinerary" :bottleneck="TRIP_DATA.bottleneck" />
        <ChecklistView  v-if="activeTab === 'checklist'"  :items="TRIP_DATA.checklist" />
        <PackingView    v-if="activeTab === 'packing'"    :items="TRIP_DATA.packing" />
        <ActionsView    v-if="activeTab === 'actions'"    :actions="TRIP_DATA.requiredActions" />
      </div>
    </div>

    <!-- 頁尾 -->
    <div class="text-center pt-12 pb-4 text-osk-navy/30 dark:text-slate-500 text-xs font-medium">
      大阪，我來了 🦀
    </div>

    <BackgroundEffects />
  </div>
</template>
