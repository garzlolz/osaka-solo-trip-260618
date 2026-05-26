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
    <div class="bg-decor tako-wander-1" style="top:42vh; right:3vw;  width:90px;  opacity:0.22;">
      <img :src="'public/images/views/章魚燒2.png'" alt="" style="width:100%;" />
    </div>
    <div class="bg-decor tako-wander-2" style="top:8vh;  left:42vw;  width:70px;  opacity:0.18;">
      <img :src="'public/images/views/章魚燒2.png'" alt="" style="width:100%;" />
    </div>
    <div class="bg-decor tako-wander-3" style="top:68vh; left:2vw;   width:110px; opacity:0.20;">
      <img :src="'public/images/views/章魚燒1.png'" alt="" style="width:100%;" />
    </div>
    <div class="bg-decor tako-wander-4" style="top:15vh; right:1vw;  width:75px;  opacity:0.16;">
      <img :src="'public/images/views/章魚燒2.png'" alt="" style="width:100%;" />
    </div>
  </div>
</template>

<style>
@keyframes takoWander1 {
  0%   { transform: translate(0px,   0px)   rotate(0deg);   }
  20%  { transform: translate(18px, -28px)  rotate(8deg);   }
  45%  { transform: translate(-10px, -45px) rotate(-4deg);  }
  70%  { transform: translate(22px,  -18px) rotate(12deg);  }
  100% { transform: translate(0px,   0px)   rotate(0deg);   }
}
@keyframes takoWander2 {
  0%   { transform: translate(0px,   0px)   rotate(0deg);   }
  30%  { transform: translate(-20px, -30px) rotate(-10deg); }
  55%  { transform: translate(14px,  -50px) rotate(6deg);   }
  80%  { transform: translate(-8px,  -20px) rotate(-5deg);  }
  100% { transform: translate(0px,   0px)   rotate(0deg);   }
}
@keyframes takoWander3 {
  0%   { transform: translate(0px,   0px)   rotate(0deg);   }
  25%  { transform: translate(25px,  -15px) rotate(5deg);   }
  50%  { transform: translate(10px,  -38px) rotate(-8deg);  }
  75%  { transform: translate(-15px, -22px) rotate(10deg);  }
  100% { transform: translate(0px,   0px)   rotate(0deg);   }
}
@keyframes takoWander4 {
  0%   { transform: translate(0px,   0px)   rotate(0deg);   }
  35%  { transform: translate(-12px, -35px) rotate(-12deg); }
  65%  { transform: translate(20px,  -20px) rotate(7deg);   }
  100% { transform: translate(0px,   0px)   rotate(0deg);   }
}

.tako-wander-1 { animation: takoWander1 8s  ease-in-out infinite; }
.tako-wander-2 { animation: takoWander2 11s ease-in-out infinite 1.5s; }
.tako-wander-3 { animation: takoWander3 9s  ease-in-out infinite 3s;   }
.tako-wander-4 { animation: takoWander4 13s ease-in-out infinite 0.8s; }
</style>
