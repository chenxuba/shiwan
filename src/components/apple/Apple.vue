<template>
  <div class="apple">
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
    <app-tab></app-tab>
    <!-- tab切换结束 -->
  </div>
</template>

<script>
  import Swiper from '@/components/swiper/Swiper'
  import Warning from '@/components/warning/Warning'
  import Nav from '@/components/nav/Nav'
  import Tab from '@/components/tab/Tab'
  

  export default {
    components: {
      "app-swiper": Swiper,
      "app-warning":Warning,
      "app-nav":Nav,
      "app-tab":Tab
    }
  }

</script>

<style scoped>

</style>
