<script setup>
import { CalendarIcon, CheckSquareIcon, StarIcon } from "./Icons.js";

defineProps({
  activeTab: { type: String, required: true },
});

defineEmits(["tab-change"]);

const tabs = [
  { id: "itinerary",  label: "行程",    icon: CalendarIcon    },
  { id: "checklist",  label: "準備清單", icon: CheckSquareIcon },
  { id: "actions",    label: "必要行動", icon: StarIcon        },
];
</script>

<template>
  <div class="flex justify-center mb-8 px-4">
    <div class="flex gap-2 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-2 rounded-full border-2 border-white/80 dark:border-slate-800 shadow-card">
      <button
        v-for="tab in tabs" :key="tab.id"
        @click="$emit('tab-change', tab.id)"
        :class="[
          'flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap border-2',
          activeTab === tab.id
            ? 'bg-osk-orange text-white border-osk-darkOrange shadow-card -translate-y-0.5'
            : 'bg-white/70 dark:bg-slate-800/70 text-osk-navy dark:text-slate-200 border-transparent hover:bg-white dark:hover:bg-slate-700 hover:border-osk-orange/30'
        ]"
      >
        <span class="hidden sm:inline w-4 h-4">
          <component :is="tab.icon" />
        </span>
        <span>{{ tab.label }}</span>
      </button>
    </div>
  </div>
</template>
