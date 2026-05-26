const renderMarkdownLinks = (text) => {
  if (!text) return "";
  return text.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-osk-teal hover:underline font-bold">$1</a>'
  );
};

export default {
  props: {
    route: { type: Object, required: true },
  },
  setup() {
    return { renderMarkdownLinks };
  },
  template: `
    <div class="bg-osk-sand rounded-2xl border-2 border-osk-amber/30 p-5 mt-4">
      <h4 class="text-sm font-black text-osk-navy mb-3 flex items-center gap-2">
        <span class="text-base">🚃</span>
        {{ route.title }}
      </h4>

      <!-- 路線表格 -->
      <div class="overflow-x-auto -mx-1">
        <table class="w-full text-xs border-collapse min-w-[480px]">
          <thead>
            <tr class="text-osk-navy/50 border-b-2 border-osk-amber/30">
              <th class="text-left py-2 px-2 font-bold w-8">#</th>
              <th class="text-left py-2 px-2 font-bold">路線</th>
              <th class="text-left py-2 px-2 font-bold">上車站</th>
              <th class="text-left py-2 px-2 font-bold">下車站</th>
              <th class="text-left py-2 px-2 font-bold whitespace-nowrap">時間</th>
              <th class="text-left py-2 px-2 font-bold">費用</th>
              <th class="text-left py-2 px-2 font-bold">備註</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="seg in route.segments"
              :key="seg.segment"
              class="border-b border-osk-amber/20 hover:bg-osk-amber/10 transition-colors"
            >
              <td class="py-2.5 px-2 font-black text-osk-orange">{{ seg.segment }}</td>
              <td class="py-2.5 px-2 text-osk-navy font-medium leading-snug" v-html="renderMarkdownLinks(seg.route)"></td>
              <td class="py-2.5 px-2 text-osk-navy/70 whitespace-nowrap" v-html="renderMarkdownLinks(seg.from)"></td>
              <td class="py-2.5 px-2 text-osk-navy/70 whitespace-nowrap" v-html="renderMarkdownLinks(seg.to)"></td>
              <td class="py-2.5 px-2 text-osk-teal font-bold whitespace-nowrap">{{ seg.duration }}</td>
              <td class="py-2.5 px-2 text-osk-darkOrange font-bold whitespace-nowrap">{{ seg.cost || '—' }}</td>
              <td class="py-2.5 px-2 text-osk-navy/50" v-html="renderMarkdownLinks(seg.note)"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 總計 -->
      <div class="mt-3 pt-3 border-t-2 border-osk-amber/30 font-bold text-sm text-osk-navy">
        {{ route.summary }}
      </div>

      <!-- 提示 -->
      <div v-if="route.tips && route.tips.length" class="mt-2 space-y-1">
        <p
          v-for="(tip, i) in route.tips"
          :key="i"
          class="text-xs text-osk-teal font-semibold"
        >{{ tip }}</p>
      </div>
    </div>
  `,
};
