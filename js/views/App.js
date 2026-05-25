import { ref, computed, onMounted, onUnmounted } from "vue";
import { TRIP_DATA } from "../data.js";
import { PlaneIcon } from "../components/Icons.js";
import BackgroundEffects from "../components/BackgroundEffects.js";
import Tabs from "../components/Tabs.js";
import ChecklistView from "./ChecklistView.js";
import ItineraryView from "./ItineraryView.js";
import ActionsView from "./ActionsView.js";
import BottleneckView from "./BottleneckView.js";

export default {
  components: { PlaneIcon, BackgroundEffects, Tabs, ChecklistView, ItineraryView, ActionsView, BottleneckView },

  setup() {
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

    onMounted(() => {
      updateCountdown();
      timer = setInterval(updateCountdown, 1000);
    });

    onUnmounted(() => clearInterval(timer));

    return { activeTab, TRIP_DATA, countdown };
  },

  template: `
    <div class="min-h-screen pb-16 relative z-10">

      <!-- 頂部標題列 -->
      <div class="sticky top-0 z-50 pt-4 px-4 mb-6">
        <div class="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-card border-2 border-white px-5 py-3 flex items-center justify-between gap-4">

          <!-- 標題 -->
          <h1 class="flex items-center gap-2 text-xl font-black text-osk-navy whitespace-nowrap">
            <span class="w-9 h-9 rounded-xl bg-osk-orange flex items-center justify-center shadow-card-hover">
              <span class="w-5 h-5 text-white"><PlaneIcon /></span>
            </span>
            <span>{{ TRIP_DATA.meta.title }}</span>
          </h1>

          <!-- 倒數計時 -->
          <div class="flex items-center gap-1.5 text-xs font-bold text-osk-navy/70">
            <template v-if="countdown.departed">
              <span class="bg-osk-green/20 text-osk-green px-3 py-1.5 rounded-full border border-osk-green/30">旅程進行中 ✈️</span>
            </template>
            <template v-else>
              <span class="hidden sm:block text-osk-navy/50 mr-1">出發倒數</span>
              <span class="bg-osk-orange/15 text-osk-orange px-2 py-1 rounded-lg border border-osk-orange/20 font-mono">{{ countdown.days }}天</span>
              <span class="bg-osk-orange/15 text-osk-orange px-2 py-1 rounded-lg border border-osk-orange/20 font-mono">{{ String(countdown.hours).padStart(2,'0') }}時</span>
              <span class="bg-osk-orange/15 text-osk-orange px-2 py-1 rounded-lg border border-osk-orange/20 font-mono">{{ String(countdown.minutes).padStart(2,'0') }}分</span>
              <span class="bg-osk-amber/30 text-osk-darkOrange px-2 py-1 rounded-lg border border-osk-amber/40 font-mono hidden sm:inline">{{ String(countdown.seconds).padStart(2,'0') }}秒</span>
            </template>
          </div>

          <!-- 日期 / 更新時間 -->
          <div class="hidden md:flex flex-col items-end text-[11px] text-osk-navy/40 font-medium leading-tight">
            <span>{{ TRIP_DATA.meta.dateRange }}</span>
            <span>更新 {{ TRIP_DATA.meta.updatedAt }}</span>
          </div>
        </div>
      </div>

      <!-- 頁籤 + 內容 -->
      <div class="max-w-4xl mx-auto">
        <Tabs :activeTab="activeTab" @tab-change="activeTab = $event" />

        <div class="animate-fade-in" :key="activeTab">
          <ItineraryView  v-if="activeTab === 'itinerary'"  :days="TRIP_DATA.itinerary" />
          <ChecklistView  v-if="activeTab === 'checklist'"  :items="TRIP_DATA.checklist" />
          <ActionsView    v-if="activeTab === 'actions'"    :actions="TRIP_DATA.requiredActions" />
          <BottleneckView v-if="activeTab === 'bottleneck'" :bottleneck="TRIP_DATA.bottleneck" />
        </div>
      </div>

      <!-- 頁尾 -->
      <div class="text-center pt-12 pb-4 text-osk-navy/30 text-xs font-medium">
        大阪，我來了 🦀
      </div>

      <BackgroundEffects />
    </div>
  `,
};
