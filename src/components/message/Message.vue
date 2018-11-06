<template>
  <div class="message">
    <!-- 头部轮播开始 -->
    <app-swiper></app-swiper>
    <!-- 头部轮播结束 -->
    <!-- 温馨提示开始 -->
    <app-warning></app-warning>
    <!-- 温馨提示结束 -->
    <!-- 快速导航开始 -->
    <app-nav></app-nav>
    <!-- 快速导航结束 -->
    <div class="moretwo" :style="backgroundDiv">
        <!-- <img src="/static/img/qidai.jpeg" alt=""> -->
        <!-- 敬请期待！ -->
    </div>
  </div>
</template>

<script>
  import Swiper from '@/components/swiper/Swiper'
  import Warning from '@/components/warning/Warning'
  import Nav from '@/components/nav/Nav'
  

  export default {
    data(){
      return{
        backgroundDiv: {
        backgroundImage: "url(" + require("../../../static/img/qidai.jpeg") + ")"
      }
      }
    },
    components: {
      "app-swiper": Swiper,
      "app-warning":Warning,
      "app-nav":Nav
    }
  }

</script>

<style scoped>
.moretwo{
    margin: 0 12px;
    text-align: center;
    color: #00a0fd;
    font-size: 20px;
    height: 190px;
    margin-top: 50px;
    background-size: 100% 100%;
   
}

</style>
