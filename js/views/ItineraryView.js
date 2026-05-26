import { ref, computed } from "vue";
import RouteTable from "./RouteTable.js";

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

const EventCard = {
  props: {
    event:  { type: Object,  required: true },
    isLast: { type: Boolean, default: false },
  },
  setup(props) {
    const noteStyle = (type) => NOTE_STYLE[type] || NOTE_STYLE.info;
    const isMapVisible = ref(false);
    const activeMapIdx = ref(0);

    // Extract maps from activity, notes and todo
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
      
      // Fallback to top-level mapLink/mapQuery if no map links found
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

    return {
      noteStyle,
      isMapVisible,
      activeMapIdx,
      maps,
      currentMap,
      mapEmbedUrl,
      toggleMap,
      renderMarkdownLinks
    };
  },
  template: `
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
  `,
};

export default {
  components: { EventCard, RouteTable },

  props: {
    days: { type: Array, required: true },
    bottleneck: { type: String, default: "" },
  },

  setup(props) {
    const activeDay = ref(props.days[0]?.day || 1);
    const isRouteModalOpen = ref(false);
    const currentDay = () => props.days.find((d) => d.day === activeDay.value) || props.days[0];
    return { activeDay, currentDay, isRouteModalOpen };
  },

  template: `
    <div class="px-4">

      <!-- Day 頁籤 -->
      <div class="flex justify-center overflow-x-auto scrollbar-hide pb-3 mb-6">
        <div class="flex gap-2 w-max">
        <button
          v-for="day in days"
          :key="day.day"
          @click="activeDay = day.day; isRouteModalOpen = false"
          :class="[
            'flex-shrink-0 flex flex-col items-center px-5 py-3 rounded-2xl border-2 text-sm font-bold transition-all',
            activeDay === day.day
              ? 'bg-osk-orange text-white border-osk-darkOrange shadow-card scale-105'
              : 'bg-white/70 text-osk-navy/60 border-white hover:bg-white hover:text-osk-navy hover:-translate-y-0.5 hover:shadow-card-hover'
          ]"
        >
          <span class="text-[10px] uppercase opacity-70 tracking-wide">Day {{ day.day }}</span>
          <span class="text-base">{{ day.date.split('（')[0] }}</span>
        </button>
        </div>
      </div>

      <!-- 當日主題 -->
      <div class="text-center mb-6">
        <div class="inline-flex items-center gap-3 bg-white/80 px-6 py-3 rounded-full border-2 border-white shadow-card">
          <h2 class="text-xl font-black text-osk-navy">{{ currentDay().date }}</h2>
          <span class="text-sm font-bold text-osk-orange bg-osk-orange/10 px-3 py-1 rounded-full border border-osk-orange/20">
            {{ currentDay().theme }}
          </span>
        </div>
      </div>

      <!-- 事件時間軸 -->
      <div class="max-w-2xl mx-auto animate-fade-in" :key="activeDay">
        <!-- 瓶頸提醒 banner (只有在 Day 4 顯示) -->
        <div
          v-if="currentDay().day === 4 && bottleneck"
          class="mb-6 bg-red-50/90 backdrop-blur-sm border-2 border-red-200 rounded-2xl p-4 flex gap-3 text-red-900 shadow-card"
        >
          <span class="text-xl flex-shrink-0">⚠️</span>
          <div>
            <h4 class="font-black text-sm text-red-950 mb-0.5">旅程核心瓶頸提醒 (Bottleneck)</h4>
            <p class="text-xs font-semibold leading-relaxed text-red-800">
              {{ bottleneck }}
            </p>
          </div>
        </div>

        <EventCard
          v-for="(event, idx) in currentDay().events"
          :key="idx"
          :event="event"
          :isLast="idx === currentDay().events.length - 1"
        />

        <!-- Day 1 子章節：INNN 圖片 & 風險 -->
        <template v-if="currentDay().subsections">
          <div v-for="(section, si) in currentDay().subsections" :key="si" class="mb-6 ml-14">

            <!-- 圖片型 -->
            <div v-if="section.type === 'images'" class="bg-white rounded-2xl border-2 border-white shadow-card p-5">
              <h3 class="text-sm font-black text-osk-navy mb-3">{{ section.title }}</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div v-for="img in section.images" :key="img.src" class="rounded-xl overflow-hidden border border-gray-100">
                  <img
                    :src="img.src"
                    :alt="img.alt"
                    class="w-full object-contain max-h-64 bg-gray-50"
                    loading="lazy"
                  />
                  <p class="text-[11px] text-osk-navy/50 px-3 py-2 leading-snug">{{ img.alt }}</p>
                </div>
              </div>
            </div>

            <!-- 風險型 -->
            <div v-else-if="section.type === 'risks'" class="bg-amber-50 rounded-2xl border-2 border-amber-200 p-5">
              <h3 class="text-sm font-black text-amber-800 mb-3">{{ section.title }}</h3>
              <div class="space-y-3">
                <div v-for="(item, ri) in section.items" :key="ri" class="flex gap-3">
                  <span class="flex-shrink-0 w-5 h-5 mt-0.5 bg-osk-orange text-white text-xs font-black rounded-full flex items-center justify-center">{{ ri + 1 }}</span>
                  <div>
                    <p class="text-sm font-bold text-amber-900">{{ item.title }}</p>
                    <p class="text-xs text-amber-700 mt-0.5 leading-relaxed">{{ item.detail }}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </template>
      </div>

      <!-- 交通與路線資訊浮動按鈕 (FAB) -->
      <div
        v-if="currentDay().routes && currentDay().routes.length"
        class="fixed bottom-6 right-6 z-40"
      >
        <button
          @click="isRouteModalOpen = !isRouteModalOpen"
          :class="[
            'flex items-center gap-2 px-5 py-3 rounded-full font-black shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 border-2 border-white/20 backdrop-blur-md text-sm',
            isRouteModalOpen
              ? 'bg-osk-orange text-white'
              : 'bg-osk-teal text-white'
          ]"
        >
          <span>🚇</span>
          <span>{{ isRouteModalOpen ? '收起交通' : '交通資訊' }}</span>
        </button>
      </div>

      <!-- 交通與路線資訊彈窗 (Modal) -->
      <div
        v-if="isRouteModalOpen && currentDay().routes && currentDay().routes.length"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      >
        <!-- 遮罩 -->
        <div
          @click="isRouteModalOpen = false"
          class="absolute inset-0 bg-osk-navy/40 backdrop-blur-sm"
        ></div>

        <!-- 內容卡片 -->
        <div
          class="relative bg-white/95 backdrop-blur-md rounded-3xl border-4 border-white shadow-2xl max-w-xl w-full max-h-[80vh] overflow-y-auto p-6 z-10"
        >
          <button
            @click="isRouteModalOpen = false"
            class="absolute top-4 right-4 text-sm font-black text-osk-navy/60 hover:text-osk-navy hover:scale-110 transition-transform"
          >
            ❌
          </button>
          
          <div class="mb-4 pr-8">
            <h3 class="text-base font-black text-osk-navy flex items-center gap-2">
              <span>🚇</span>
              <span>Day {{ currentDay().day }} 交通與路線資訊</span>
            </h3>
          </div>

          <div class="space-y-4">
            <RouteTable
              v-for="(route, ri) in currentDay().routes"
              :key="ri"
              :route="route"
            />
          </div>
        </div>
      </div>
    </div>
  `,
};
