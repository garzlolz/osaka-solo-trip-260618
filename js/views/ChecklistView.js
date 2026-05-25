import { ref, computed, onMounted } from "vue";

const STORAGE_KEY = "osaka-2026-checklist";

export default {
  props: {
    items: { type: Array, required: true },
  },

  setup(props) {
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

    const resetAll = () => {
      props.items.forEach((item) => { checked.value[item.id] = item.done; });
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(checked.value));
      } catch { /* 靜默失敗 */ }
    };

    return { checked, toggle, doneCount, total, allDone, resetAll };
  },

  template: `
    <div class="px-4 max-w-2xl mx-auto">

      <!-- 進度卡 -->
      <div class="bg-white rounded-3xl border-2 border-white shadow-card p-6 mb-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-black text-osk-navy">出發前待辦清單</h2>
          <button
            @click="resetAll"
            class="text-xs font-bold text-osk-navy/40 hover:text-osk-red transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50"
          >重置</button>
        </div>

        <!-- 進度條 -->
        <div class="flex items-center gap-3 mb-2">
          <div class="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
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
        <p v-else class="text-xs text-osk-navy/40">
          還剩 {{ total - doneCount }} 項待完成
        </p>
      </div>

      <!-- 清單項目 -->
      <div class="space-y-2.5">
        <div
          v-for="item in items"
          :key="item.id"
          @click="toggle(item.id)"
          class="flex items-center gap-4 bg-white rounded-2xl border-2 px-5 py-4 cursor-pointer transition-all duration-200 select-none group"
          :class="checked[item.id]
            ? 'border-osk-green/30 bg-osk-green/5'
            : 'border-white hover:border-osk-orange/30 hover:shadow-card-hover'"
        >
          <!-- 核取方塊 -->
          <div
            class="w-6 h-6 rounded-lg border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200"
            :class="checked[item.id]
              ? 'bg-osk-green border-osk-green'
              : 'border-gray-300 group-hover:border-osk-orange'"
          >
            <svg v-if="checked[item.id]" class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>

          <!-- 文字 -->
          <span
            class="flex-1 text-sm font-semibold transition-colors"
            :class="checked[item.id] ? 'text-osk-navy/35 line-through' : 'text-osk-navy'"
          >{{ item.text }}</span>

          <!-- 外部連結 -->
          <a
            v-if="item.url && !checked[item.id]"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            @click.stop
            class="text-xs font-bold text-osk-teal hover:text-osk-navy bg-osk-teal/10 hover:bg-osk-teal/20 px-2.5 py-1 rounded-lg transition-colors shrink-0"
          >前往 →</a>
        </div>
      </div>
    </div>
  `,
};
