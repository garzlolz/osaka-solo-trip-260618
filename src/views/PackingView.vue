<script setup>
import { ref, computed, onMounted } from "vue";

const STORAGE_KEY = "osaka-2026-packing";

const props = defineProps({
  items: { type: Array, required: true },
});

const checked = ref({});

onMounted(() => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    props.items.forEach((item) => {
      checked.value[item.id] = item.id in saved ? saved[item.id] : item.done;
    });
  } catch {
    props.items.forEach((item) => { checked.value[item.id] = item.done; });
  }
});

const toggle = (id) => {
  checked.value[id] = !checked.value[id];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked.value));
  } catch { /* 靜默失敗 */ }
};

const doneCount = computed(() => Object.values(checked.value).filter(Boolean).length);
const total     = computed(() => props.items.length);
const allDone   = computed(() => doneCount.value === total.value);

const CATEGORIES = [
  "🛂 證件與貴重物品",
  "🔋 3C 與隨身電器",
  "👕 衣物盥洗與生活",
  "💊 常用藥品與雜物"
];

const groupedItems = computed(() => {
  return CATEGORIES.map((cat) => {
    const catItems = props.items.filter((item) => item.category === cat);
    const catDoneCount = catItems.filter((item) => checked.value[item.id]).length;
    const catTotal = catItems.length;
    const catAllDone = catDoneCount === catTotal;
    return {
      name: cat,
      items: catItems,
      doneCount: catDoneCount,
      total: catTotal,
      allDone: catAllDone,
    };
  });
});

const resetAll = () => {
  props.items.forEach((item) => { checked.value[item.id] = false; });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked.value));
  } catch { /* 靜默失敗 */ }
};
</script>

<template>
  <div class="px-4 max-w-2xl mx-auto">

    <!-- 進度卡 -->
    <div class="bg-white dark:bg-slate-900 rounded-3xl border-2 border-white dark:border-slate-800 shadow-card p-6 mb-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-black text-osk-navy dark:text-slate-100">行李打包清單</h2>
        <button
          @click="resetAll"
          class="text-xs font-bold text-osk-navy/40 dark:text-slate-400 hover:text-osk-red transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/20"
        >重置</button>
      </div>

      <!-- 進度條 -->
      <div class="flex items-center gap-3 mb-2">
        <div class="flex-1 h-3 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            class="h-full rounded-full transition-all duration-500"
            :class="allDone ? 'bg-osk-green' : 'bg-osk-orange'"
            :style="{ width: total > 0 ? (doneCount / total * 100) + '%' : '0%' }"
          ></div>
        </div>
        <span class="text-sm font-black shrink-0" :class="allDone ? 'text-osk-green' : 'text-osk-orange'">
          {{ doneCount }} / {{ total }}
        </span>
      </div>
      <p v-if="allDone" class="text-sm font-bold text-osk-green">
        🎉 行李打包完畢！隨時可以出發！
      </p>
      <p v-else class="text-xs text-osk-navy/40 dark:text-slate-400">
        還有 {{ total - doneCount }} 件物品待打包
      </p>
    </div>

    <!-- 分組行李清單項目 -->
    <div class="space-y-6">
      <div
        v-for="group in groupedItems"
        :key="group.name"
        class="bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm rounded-3xl border-2 border-white/50 dark:border-slate-800/50 p-5 shadow-sm"
      >
        <!-- 分組標題與分組進度條 -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h3 class="text-sm font-black flex items-center gap-1.5" :class="group.allDone ? 'text-osk-green' : 'text-osk-navy dark:text-slate-200'">
            <span class="material-icons text-base leading-none">{{ group.allDone ? 'check_circle' : 'work_outline' }}</span>
            <span>{{ group.name }}</span>
          </h3>
          
          <!-- 分組小進度條 -->
          <div class="flex items-center gap-2 shrink-0">
            <div class="w-24 h-2 bg-gray-100 dark:bg-slate-850 rounded-full overflow-hidden">
              <div
                class="h-full rounded-full transition-all duration-300"
                :class="group.allDone ? 'bg-osk-green' : 'bg-osk-teal'"
                :style="{ width: (group.doneCount / group.total * 100) + '%' }"
              ></div>
            </div>
            <span class="text-[11px] font-bold" :class="group.allDone ? 'text-osk-green' : 'text-osk-teal'">
              {{ group.doneCount }} / {{ group.total }}
            </span>
          </div>
        </div>

        <!-- 分組內行李項目 -->
        <div class="space-y-2">
          <div
            v-for="item in group.items"
            :key="item.id"
            @click="toggle(item.id)"
            class="flex items-center gap-4 bg-white dark:bg-slate-900/70 rounded-2xl border-2 px-5 py-4 cursor-pointer transition-all duration-200 select-none group"
            :class="checked[item.id]
              ? 'border-osk-green/30 dark:border-osk-green/20 bg-osk-green/5 dark:bg-osk-green/10'
              : 'border-white dark:border-slate-800 hover:border-osk-orange/30 dark:hover:border-osk-orange/40 hover:shadow-card-hover'"
          >
            <!-- 核取方塊 -->
            <div
              class="w-6 h-6 rounded-lg border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200"
              :class="checked[item.id]
                ? 'bg-osk-green border-osk-green'
                : 'border-gray-300 dark:border-slate-650 group-hover:border-osk-orange'"
            >
              <svg v-if="checked[item.id]" class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>

            <!-- 文字 -->
            <span
              class="flex-1 text-sm font-semibold transition-colors"
              :class="checked[item.id] ? 'text-osk-navy/35 dark:text-slate-500 line-through' : 'text-osk-navy dark:text-slate-200'"
            >{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
