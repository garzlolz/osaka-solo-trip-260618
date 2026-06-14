<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { TRIP_DATA } from "./js/data.js";
import { PlaneIcon } from "./components/Icons.js";
import BackgroundEffects from "./components/BackgroundEffects.vue";
import Tabs from "./components/Tabs.vue";
import ChecklistView from "./views/ChecklistView.vue";
import ItineraryView from "./views/ItineraryView.vue";
import ActionsView from "./views/ActionsView.vue";

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
  <div class="min-h-screen pb-16 relative z-10">

    <!-- 頂部標題列 -->
    <div class="sticky top-0 z-50 pt-4 px-4 mb-6">
      <div class="max-w-4xl mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-card border-2 border-white dark:border-slate-800 px-5 py-3 flex items-center justify-between gap-4">

        <!-- 標題 -->
        <h1 class="flex items-center gap-2 text-xl font-black text-osk-navy dark:text-slate-100 whitespace-nowrap">
          <span class="w-9 h-9 rounded-xl bg-osk-orange flex items-center justify-center shadow-card-hover">
            <span class="w-5 h-5 text-white"><PlaneIcon /></span>
          </span>
          <span>{{ TRIP_DATA.meta.title }}</span>
        </h1>

        <!-- 倒數計時 -->
        <div class="flex items-center gap-1.5 text-xs font-bold text-osk-navy/70 dark:text-slate-300">
          <template v-if="countdown.departed">
            <span class="bg-osk-green/20 text-osk-green px-3 py-1.5 rounded-full border border-osk-green/30">旅程進行中 ✈️</span>
          </template>
          <template v-else>
            <span class="hidden sm:block text-osk-navy/50 dark:text-slate-400 mr-1">出發倒數</span>
            <span class="bg-osk-orange/15 text-osk-orange px-2 py-1 rounded-lg border border-osk-orange/20 font-mono">{{ countdown.days }}天</span>
            <span class="bg-osk-orange/15 text-osk-orange px-2 py-1 rounded-lg border border-osk-orange/20 font-mono">{{ String(countdown.hours).padStart(2,'0') }}時</span>
            <span class="bg-osk-orange/15 text-osk-orange px-2 py-1 rounded-lg border border-osk-orange/20 font-mono">{{ String(countdown.minutes).padStart(2,'0') }}分</span>
            <span class="bg-osk-amber/30 text-osk-darkOrange px-2 py-1 rounded-lg border border-osk-amber/40 font-mono hidden sm:inline">{{ String(countdown.seconds).padStart(2,'0') }}秒</span>
          </template>
        </div>

        <div class="flex items-center gap-3">
          <!-- 主題切換按鈕 -->
          <button
            @click="toggleDark"
            class="w-9 h-9 rounded-xl border border-gray-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 flex items-center justify-center text-osk-navy/60 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
            title="切換深淺色主題"
          >
            <span class="material-icons text-lg leading-none">
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

    <!-- 頁籤 + 內容 -->
    <div class="max-w-4xl mx-auto">
      <Tabs :activeTab="activeTab" @tab-change="activeTab = $event" />

      <div class="animate-fade-in" :key="activeTab">
        <ItineraryView  v-if="activeTab === 'itinerary'"  :days="TRIP_DATA.itinerary" :bottleneck="TRIP_DATA.bottleneck" />
        <ChecklistView  v-if="activeTab === 'checklist'"  :items="TRIP_DATA.checklist" />
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
