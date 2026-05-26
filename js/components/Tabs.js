import { CalendarIcon, CheckSquareIcon, StarIcon } from "./Icons.js";

export default {
  props: {
    activeTab: { type: String, required: true },
  },
  emits: ["tab-change"],
  components: { CalendarIcon, CheckSquareIcon, StarIcon },
  setup() {
    const tabs = [
      { id: "itinerary",  label: "行程",    icon: "CalendarIcon"    },
      { id: "checklist",  label: "準備清單", icon: "CheckSquareIcon" },
      { id: "actions",    label: "必要行動", icon: "StarIcon"        },
    ];
    return { tabs };
  },
  template: `
    <div class="flex justify-center mb-8 px-4">
      <div class="flex gap-2 bg-white/60 backdrop-blur-sm p-2 rounded-full border-2 border-white/80 shadow-card">
        <button
          v-for="tab in tabs" :key="tab.id"
          @click="$emit('tab-change', tab.id)"
          :class="[
            'flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap border-2',
            activeTab === tab.id
              ? 'bg-osk-orange text-white border-osk-darkOrange shadow-card -translate-y-0.5'
              : 'bg-white/70 text-osk-navy border-transparent hover:bg-white hover:border-osk-orange/30'
          ]"
        >
          <span class="hidden sm:inline w-4 h-4">
            <component :is="tab.icon" />
          </span>
          <span>{{ tab.label }}</span>
        </button>
      </div>
    </div>
  `,
};
