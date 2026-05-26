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

    <!-- 章魚燒裝飾 -->
    <div class="bg-decor animate-float-slow"   style="top:42vh; right:3vw;  width:90px;  opacity:0.22;">
      <img :src="'public/images/views/章魚燒2.png'" alt="" style="width:100%; transform:rotate(12deg);" />
    </div>
    <div class="bg-decor animate-float-medium" style="top:8vh;  left:42vw;  width:70px;  opacity:0.18;">
      <img :src="'public/images/views/章魚燒2.png'" alt="" style="width:100%; transform:rotate(-8deg);" />
    </div>
    <div class="bg-decor animate-float-fast"   style="top:68vh; left:2vw;   width:110px; opacity:0.20;">
      <img :src="'public/images/views/章魚燒1.png'" alt="" style="width:100%; transform:rotate(6deg);" />
    </div>
    <div class="bg-decor animate-float-slow"   style="top:15vh; right:1vw;  width:75px;  opacity:0.16;">
      <img :src="'public/images/views/章魚燒2.png'" alt="" style="width:100%; transform:rotate(-15deg);" />
    </div>
  </div>
</template>
