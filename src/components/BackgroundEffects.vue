<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const takoEls = ref([]);

const configs = [
  { vx:  1.4, vy:  0.9, rotV:  0.5, size: 90,  img: "章魚燒2.png", opacity: 0.55 },
  { vx: -1.1, vy:  1.3, rotV: -0.7, size: 70,  img: "章魚燒2.png", opacity: 0.50 },
  { vx:  1.7, vy: -1.0, rotV:  0.8, size: 110, img: "章魚燒1.png", opacity: 0.52 },
  { vx: -1.3, vy: -1.2, rotV: -0.5, size: 75,  img: "章魚燒2.png", opacity: 0.48 },
];

const state = configs.map(c => ({
  ...c,
  x: 0,
  y: 0,
  rot: Math.random() * 360,
}));

let animId = null;

const animate = () => {
  const W = window.innerWidth;
  const H = window.innerHeight;

  state.forEach((t, i) => {
    t.x += t.vx;
    t.y += t.vy;
    t.rot += t.rotV;

    if (t.x <= 0)          { t.vx =  Math.abs(t.vx); t.x = 0; }
    if (t.x + t.size >= W) { t.vx = -Math.abs(t.vx); t.x = W - t.size; }
    if (t.y <= 0)          { t.vy =  Math.abs(t.vy); t.y = 0; }
    if (t.y + t.size >= H) { t.vy = -Math.abs(t.vy); t.y = H - t.size; }

    const el = takoEls.value[i];
    if (el) {
      el.style.left      = t.x + "px";
      el.style.top       = t.y + "px";
      el.style.transform = `rotate(${t.rot}deg)`;
    }
  });

  animId = requestAnimationFrame(animate);
};

onMounted(() => {
  const W = window.innerWidth;
  const H = window.innerHeight;
  state.forEach(t => {
    t.x = Math.random() * (W - t.size);
    t.y = Math.random() * (H - t.size);
  });
  animId = requestAnimationFrame(animate);
});

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId);
});
</script>

<template>
  <div aria-hidden="true">
    <!-- 大圓形裝飾 -->
    <div class="bg-decor animate-float-slow"   style="top:8vh;  left:3vw;  width:120px; height:120px; border-radius:50%; background:radial-gradient(circle, #F4874B44, #F4874B11);"></div>
    <div class="bg-decor animate-float-medium" style="top:30vh; right:4vw; width:80px;  height:80px;  border-radius:50%; background:radial-gradient(circle, #F7C94844, #F7C94811);"></div>
    <div class="bg-decor animate-float-fast"   style="top:65vh; left:6vw;  width:60px;  height:60px;  border-radius:50%; background:radial-gradient(circle, #3AAFB944, #3AAFB911);"></div>
    <div class="bg-decor animate-float-slow"   style="top:80vh; right:8vw; width:100px; height:100px; border-radius:50%; background:radial-gradient(circle, #F4874B33, transparent);"></div>

    <!-- 旋轉方塊 -->
    <div class="bg-decor animate-spin-slow"    style="top:50vh; left:1vw;  width:40px; height:40px; border-radius:8px;  background:#F4874B18; transform-origin:center;"></div>
    <div class="bg-decor animate-spin-reverse" style="top:20vh; right:2vw; width:50px; height:50px; border-radius:12px; background:#F7C94822; transform-origin:center;"></div>

    <!-- 章魚燒：JS 驅動反彈 -->
    <div
      v-for="(c, i) in configs"
      :key="i"
      :ref="el => { if (el) takoEls[i] = el }"
      :style="{
        position: 'fixed',
        zIndex: -1,
        pointerEvents: 'none',
        userSelect: 'none',
        width: c.size + 'px',
        opacity: c.opacity,
        left: 0,
        top: 0,
      }"
    >
      <img :src="`images/views/${c.img}`" alt="" style="width:100%; display:block;" />
    </div>
  </div>
</template>
