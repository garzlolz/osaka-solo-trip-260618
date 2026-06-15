<script setup>
import { CalendarIcon, CheckSquareIcon, StarIcon, BriefcaseIcon } from "./Icons.js";

defineProps({
  activeTab: { type: String, required: true },
});

defineEmits(["tab-change"]);

const tabs = [
  { id: "itinerary",  label: "行程",    icon: CalendarIcon,    matIcon: "calendar_month" },
  { id: "checklist",  label: "準備清單", icon: CheckSquareIcon, matIcon: "checklist" },
  { id: "packing",    label: "攜帶物品", icon: BriefcaseIcon,   matIcon: "luggage" },
  { id: "actions",    label: "必要行動", icon: StarIcon,        matIcon: "push_pin" },
];
</script>

<template>
  <!-- 桌面版：頂部橫排 pill（md 以上才顯示） -->
  <div class="hidden md:flex justify-center mb-8 px-4">
    <div class="flex gap-2 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-2 rounded-full border-2 border-white/80 dark:border-slate-800 shadow-card">
      <button
        v-for="tab in tabs" :key="'desktop-' + tab.id"
        @click="$emit('tab-change', tab.id)"
        :class="[
          'flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap border-2',
          activeTab === tab.id
            ? 'bg-osk-orange text-white border-osk-darkOrange shadow-card -translate-y-0.5'
            : 'bg-white/70 dark:bg-slate-800/70 text-osk-navy dark:text-slate-200 border-transparent hover:bg-white dark:hover:bg-slate-700 hover:border-osk-orange/30'
        ]"
      >
        <span class="w-4 h-4">
          <component :is="tab.icon" />
        </span>
        <span>{{ tab.label }}</span>
      </button>
    </div>
  </div>

  <!-- 手機版：底部固定導覽列（md 以下才顯示） -->
  <nav class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t-2 border-white/60 dark:border-slate-800/60 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
       style="padding-bottom: env(safe-area-inset-bottom, 0px);"
  >
    <div class="flex justify-around items-stretch">
      <button
        v-for="tab in tabs" :key="'mobile-' + tab.id"
        @click="$emit('tab-change', tab.id)"
        :class="[
          'flex flex-col items-center justify-center flex-1 py-2 pt-2.5 gap-0.5 transition-all duration-200 relative',
          activeTab === tab.id
            ? 'text-osk-orange'
            : 'text-osk-navy/40 dark:text-slate-500 active:text-osk-orange/60'
        ]"
      >
        <!-- 頂部指示條 -->
        <span
          v-if="activeTab === tab.id"
          class="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-osk-orange rounded-full transition-all duration-300"
        ></span>

        <!-- 圖示 -->
        <span
          :class="[
            'material-icons text-xl leading-none transition-transform duration-200',
            activeTab === tab.id ? 'scale-110' : ''
          ]"
        >{{ tab.matIcon }}</span>

        <!-- 文字 -->
        <span
          :class="[
            'text-[10px] font-bold leading-tight transition-colors',
            activeTab === tab.id ? 'text-osk-orange' : ''
          ]"
        >{{ tab.label }}</span>
      </button>
    </div>
  </nav>
</template>
