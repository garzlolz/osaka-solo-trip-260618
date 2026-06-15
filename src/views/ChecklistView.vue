<script setup>
import { ref, computed, onMounted } from "vue";

const STORAGE_KEY = "osaka-2026-checklist";

const props = defineProps({
  items: { type: Array, required: true },
});

const checked = ref({});

onMounted(() => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    // 初始化：優先使用 localStorage 狀態，否則採用資料預設值
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
  {
    name: "🛂 證件與登錄",
    ids: [2, 3, 8],
  },
  {
    name: "🎫 門票與網路",
    ids: [4, 5, 6, 7],
  },
  {
    name: "🎒 行前準備/APP",
    ids: [1, 9, 10, 11, 12],
  }
];

const groupedItems = computed(() => {
  return CATEGORIES.map((cat) => {
    const catItems = props.items.filter((item) => cat.ids.includes(item.id));
    const catDoneCount = catItems.filter((item) => checked.value[item.id]).length;
    const catTotal = catItems.length;
    const catAllDone = catDoneCount === catTotal;
    return {
      name: cat.name,
      items: catItems,
      doneCount: catDoneCount,
      total: catTotal,
      allDone: catAllDone,
    };
  });
});

const resetAll = () => {
  props.items.forEach((item) => { checked.value[item.id] = item.done; });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked.value));
  } catch { /* 靜默失敗 */ }
};
</script>

<template>
  <div class="px-3 sm:px-4 max-w-2xl mx-auto">

    <!-- 進度卡 -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border-2 border-white dark:border-slate-800 shadow-card p-4 sm:p-6 mb-4 sm:mb-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-black text-osk-navy dark:text-slate-100">出發前待辦清單</h2>
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
        🎉 全部完成！準備出發！
      </p>
      <p v-else class="text-xs text-osk-navy/40 dark:text-slate-400">
        還剩 {{ total - doneCount }} 項待完成
      </p>
    </div>

    <!-- 分組清單項目 -->
    <div class="space-y-6">
      <div
        v-for="group in groupedItems"
        :key="group.name"
        class="bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-2 border-white/50 dark:border-slate-800/50 p-3.5 sm:p-5 shadow-sm"
      >
        <!-- 分組標題與分組進度條 -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h3 class="text-sm font-black flex items-center gap-1.5" :class="group.allDone ? 'text-osk-green' : 'text-osk-navy dark:text-slate-200'">
            <span class="material-icons text-base leading-none">{{ group.allDone ? 'check_circle' : 'pending_actions' }}</span>
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

        <!-- 分組內清單項目 -->
        <div class="space-y-2">
          <div
            v-for="item in group.items"
            :key="item.id"
            @click="toggle(item.id)"
            class="flex items-center gap-3 sm:gap-4 bg-white dark:bg-slate-900/70 rounded-xl sm:rounded-2xl border-2 px-3.5 sm:px-5 py-3.5 sm:py-4 cursor-pointer transition-all duration-200 select-none group active:scale-[0.98]"
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

            <!-- 外部連結 -->
            <a
              v-if="item.url && !checked[item.id]"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              @click.stop
              class="text-xs font-bold text-osk-teal hover:text-osk-navy dark:hover:text-slate-100 bg-osk-teal/10 hover:bg-osk-teal/20 px-3 py-1.5 rounded-lg transition-colors shrink-0 flex items-center gap-1"
            ><span class="material-icons text-sm leading-none">open_in_new</span>前往</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
