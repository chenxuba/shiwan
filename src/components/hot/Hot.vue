<template>
  <div class="hot">
    <div class="list" @click="showTeach">
      <div class="left-img" :style="backgroundDiv"></div>
      <div class="right-txt">
        <div class="t1" v-rainbow style="color: red;font-weight: 700;">¥ 新 手 教 程 ¥ ( 新 手 必 看 )</div>
        <div class="t2">ASO苹果试玩教程，更多介绍！</div>
        <div class="t3">观看人次/6752</div>
        <div class="t4">观看</div>
      </div>
    </div>
    <!-- 试玩项目列表 -->
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
        backgroundImage: "url(" + require("../../../static/img/gonglue.png") + ")"
      }
    };
  },
  mounted() {
    axios.get("https://chenxuba.github.io/shiwan.json").then(res => {
      this.item_list = res.data;
    });
  },
  methods: {
    start(e) {
      window.location.href = e;
    },
    showTeach() {
      this.$router.push({ path: "/teach" });
    }
  }
};
</script>

<style scoped>
.hot {
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
  /* background: url("/static/img/gonglue.png") no-repeat center; */
  background-size: 100% 100%;
}
.list .left-img img {
  width: 50px;
  height: 50px;
  border-radius: 12px;
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
  height: 17px;
  font-size: 12px;
  color: #333;
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
