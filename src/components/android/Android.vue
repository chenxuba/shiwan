<template>
  <div class="android">
    <!-- 头部轮播开始 -->
    <app-swiper></app-swiper>
    <!-- 头部轮播结束 -->
    <!-- 温馨提示开始 -->
    <app-warning></app-warning>
    <!-- 温馨提示结束 -->
    <!-- 快速导航开始 -->
    <app-nav></app-nav>
    <!-- 快速导航结束 -->
    <!-- tab切换开始 -->
    <app-tabAndroid></app-tabAndroid>
    <!-- tab切换结束 -->
  </div>
</template>

<script>
  import Swiper from '@/components/swiper/Swiper'
  import Warning from '@/components/warning/Warning'
  import Nav from '@/components/nav/Nav'
  import TabAndroid from '@/components/tabAndroid/TabAndroid'
  

  export default {
    components: {
      "app-swiper": Swiper,
      "app-warning":Warning,
      "app-nav":Nav,
      "app-tabAndroid":TabAndroid

    }
  }

</script>

<style scoped>

</style>
