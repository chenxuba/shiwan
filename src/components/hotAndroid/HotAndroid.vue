<template>
  <div class="hotAndroid">
    <div class="list" @click="showNew">
      <div class="left-img" :style="backgroundDiv"></div>
      <div class="right-txt">
        <div class="t1" v-rainbow style="color: red;font-weight: 700;">安卓『新手必读』</div>
        <div class="t2">安卓任务奖励低于苹果任务</div>
        <div class="t3">点击人次/14352</div>
        <div class="t4">进入</div>
      </div>
    </div>
    <!-- *********************************分****割****线****************************************** -->
    <div class="list" v-for="(item,index) in item_list" :key="index" @click="start(item.shiwan_url)">
      <div class="left-img">
          <img :src="item.pic_url">
      </div>
      <div class="right-txt">
        <div class="t1" v-rainbow>{{item.title}}</div>
        <div class="t2">{{item.info}}</div>
        <div class="t3">{{item.person}}人加入</div>
        <div class="t4">进入</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      item_list: [],
      backgroundDiv: {
        backgroundImage: "url(" + require("../../../static/img/newhand.png") + ")"
      }
    };
  },
  methods: {
    showNew() {
      alert("持续更新中～～")
    },
    start(e) {
      window.location.href = e;
    }
  },
  mounted() {
    axios.get("https://chenxuba.github.io/anzhuo.json").then(res => {
      this.item_list = res.data;
    });
  }
};
</script>

<style scoped>
.hotAndroid {
  height: 100%;
  margin: 0 12px;
}
.list {
  margin-top: 5px;
  padding: 15px 0;
  height: 80px;
  display: flex;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
}

.list .left-img {
  flex: 0 0 50px;
  margin-right: 15px;
  /* background: url("/static/img/newhand.png") no-repeat center; */
  background-size: 100% 100%;
}
.list .left-img img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
}

.list .right-txt {
  flex: 1;
  position: relative;
}

.list .right-txt .t1 {
  height: 20px;
  color: #000000;
  font-size: 14px;
}

.list .right-txt .t2 {
  width: 215px;
  height: 17px;
  font-size: 12px;
  color: #333;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.list .right-txt .t3 {
  font-size: 10px;
  color: #3aa0f6;
}

.list .right-txt .t4 {
  width: 58px;
  height: 30px;
  background: #3aa0f6;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-family: "微软雅黑", "宋体";
  font-size: 14px;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -15px;
}
</style>
