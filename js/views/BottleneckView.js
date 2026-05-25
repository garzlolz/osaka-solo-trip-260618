export default {
  props: {
    bottleneck: { type: String, required: true },
  },
  template: `
    <div class="px-4 max-w-2xl mx-auto">
      <div class="bg-osk-navy rounded-3xl border-2 border-osk-navy shadow-card p-8">
        <h2 class="text-2xl font-black text-white mb-6 flex items-center gap-3">
          <span class="text-3xl">🧠</span>
          Bottleneck
        </h2>
        <p class="text-base font-medium text-white/85 leading-relaxed">
          {{ bottleneck }}
        </p>
        <div class="mt-6 pt-6 border-t border-white/10 text-xs text-white/35 font-medium">
          掌握瓶頸 → 其他的都是細節
        </div>
      </div>
    </div>
  `,
};
