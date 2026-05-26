<template>
  <div aria-hidden="true">
    <!-- 大圓形裝飾 -->
    <div class="bg-decor animate-float-slow"  style="top:8vh;  left:3vw;  width:120px; height:120px; border-radius:50%; background:radial-gradient(circle, #F4874B44, #F4874B11);"></div>
    <div class="bg-decor animate-float-medium" style="top:30vh; right:4vw; width:80px;  height:80px;  border-radius:50%; background:radial-gradient(circle, #F7C94844, #F7C94811);"></div>
    <div class="bg-decor animate-float-fast"  style="top:65vh; left:6vw;  width:60px;  height:60px;  border-radius:50%; background:radial-gradient(circle, #3AAFB944, #3AAFB911);"></div>
    <div class="bg-decor animate-float-slow"  style="top:80vh; right:8vw; width:100px; height:100px; border-radius:50%; background:radial-gradient(circle, #F4874B33, transparent);"></div>

    <!-- 旋轉方塊 -->
    <div class="bg-decor animate-spin-slow"   style="top:50vh; left:1vw;  width:40px; height:40px; border-radius:8px; background:#F4874B18; transform-origin:center;"></div>
    <div class="bg-decor animate-spin-reverse" style="top:20vh; right:2vw; width:50px; height:50px; border-radius:12px; background:#F7C94822; transform-origin:center;"></div>

    <!-- 點陣裝飾 -->
    <div class="bg-decor" style="top:45vh; right:5vw;">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="#F4874B">
        <circle cx="10" cy="10" r="4"/><circle cx="30" cy="10" r="4"/><circle cx="50" cy="10" r="4"/>
        <circle cx="10" cy="30" r="4"/><circle cx="30" cy="30" r="4"/><circle cx="50" cy="30" r="4"/>
        <circle cx="10" cy="50" r="4"/><circle cx="30" cy="50" r="4"/><circle cx="50" cy="50" r="4"/>
      </svg>
    </div>
    <div class="bg-decor" style="top:10vh; left:45vw;">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="#F7C948">
        <circle cx="8"  cy="8"  r="3"/><circle cx="20" cy="8"  r="3"/><circle cx="32" cy="8"  r="3"/>
        <circle cx="8"  cy="20" r="3"/><circle cx="20" cy="20" r="3"/><circle cx="32" cy="20" r="3"/>
        <circle cx="8"  cy="32" r="3"/><circle cx="20" cy="32" r="3"/><circle cx="32" cy="32" r="3"/>
      </svg>
    </div>
  </div>
</template>
