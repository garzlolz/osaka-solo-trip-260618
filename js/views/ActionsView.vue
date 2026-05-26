<script setup>
defineProps({
  actions: { type: Array, required: true },
});
</script>

<template>
  <div class="px-4 max-w-2xl mx-auto space-y-6">

    <!-- 📌 必要行動 -->
    <div class="bg-white rounded-3xl border-2 border-white shadow-card p-6">
      <h2 class="text-lg font-black text-osk-navy mb-5 flex items-center gap-2">
        <span class="text-xl">📌</span>
        必要行動
      </h2>
      <div class="space-y-3">
        <div
          v-for="(action, i) in actions"
          :key="i"
          class="flex items-start gap-3 p-4 rounded-2xl border-2 border-osk-orange/15 bg-osk-orange/5"
        >
          <span class="flex-shrink-0 mt-0.5 w-7 h-7 rounded-xl bg-osk-orange text-white text-xs font-black flex items-center justify-center shadow-card-hover">
            {{ i + 1 }}
          </span>
          <div class="flex-1 min-w-0">
            <p class="text-xs font-bold text-osk-orange mb-0.5">{{ action.priority }}</p>
            <p class="text-sm font-semibold text-osk-navy leading-snug">{{ action.action }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
