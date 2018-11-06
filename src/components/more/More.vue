<template>
    <div class="more" :style="backgroundDiv">
        <!-- <img src="/static/img/qidai.jpeg" alt=""> -->
        <!-- 敬请期待！ -->
    </div>
</template>

<script>
export default {
    data(){
      return{
        backgroundDiv: {
        backgroundImage: "url(" + require("../../../static/img/qidai.jpeg") + ")"
      }
      }
    },
}
</script>

<style scoped>
.more{
    margin: 0 12px;
    text-align: center;
    color: #00a0fd;
    font-size: 20px;
    margin-top: 50px;
    height:190px;
    background-size: 100% 100%;
}
/* .more img{
    display: block;
    width: 100%;
    margin-top: 20%;
} */
</style>
