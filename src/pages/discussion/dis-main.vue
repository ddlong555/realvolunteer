<template>
  <div class="dmain">
    <div class="dmain-single">
      <div class="dmain-single-top">
        <div class="dmain-single-top-name">
          <div class="dmain-single-top-name-head" :style="{backgroundImage:'url('+head+')'}">
          </div>
          <div class="dmain-single-top-name-id">
            <div class="dmain-single-top-name-id-font">
              {{ id }}
            </div>
            <div class="dmain-single-top-name-id-time">
              {{ time }}
            </div>
          </div>
        </div>
        <div class="dmain-single-top-passage">
          {{ passage }}
        </div>
      </div>
      <div class="dmain-single-photo">
        <div class="dmain-single-photo-single" v-for="(item,index) in img" :key="index">
          <img :src=item alt="" preview="0">
        </div>
      </div>
      <div class="dmain-single-function">
        <div class="dmain-single-function-single">
          <img src="../../assets/image/discussion/zhuanfa.svg" alt="">
          <div>{{ number }}</div>
        </div>
        <div class="dmain-single-function-single">
          <img src="../../assets/image/discussion/say.svg" alt="">
          <div>{{ number }}</div>
        </div>
        <div class="dmain-single-function-single">
          <img src="../../assets/image/discussion/good.svg" alt="">
          <div>{{ number }}</div>
        </div>
      </div>
    </div>
    <div class="dmain-single">
      <div class="dmain-single-top">
        <div class="dmain-single-top-name">
          <div class="dmain-single-top-name-head" :style="{backgroundImage:'url('+head+')'}">
          </div>
          <div class="dmain-single-top-name-id">
            <div class="dmain-single-top-name-id-font">
              {{ id }}
            </div>
            <div class="dmain-single-top-name-id-time">
              {{ time }}
            </div>
          </div>
        </div>
        <div class="dmain-single-top-passage">
          {{ passage }}
        </div>
      </div>
      <div class="dmain-single-photo">
        <div class="dmain-single-photo-single" v-for="(item,index) in img" :key="index">
          <img :src=item alt="" preview="1">
        </div>
      </div>
      <div class="dmain-single-function">
        <div class="dmain-single-function-single">
          <img src="../../assets/image/discussion/zhuanfa.svg" alt="" >
          <div>{{ number }}</div>
        </div>
        <div class="dmain-single-function-single">
          <img src="../../assets/image/discussion/say.svg" alt="">
          <div>{{ number }}</div>
        </div>
        <div class="dmain-single-function-single">
          <img src="../../assets/image/discussion/good.svg" alt="">
          <div>{{ number }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dmain",
  data() {
    return {
      passage: "第一条规定是这样的，那到底是怎么样的呢，是这样的，不是那样的，一定要这样",
      img: [require("../../assets/image/test/ad.jpg"), require("../../assets/image/test/d.jpg"), require("../../assets/image/test/ad.jpg"), require("../../assets/image/test/d.jpg"), require("../../assets/image/test/ad.jpg"), require("../../assets/image/test/d.jpg"), require("../../assets/image/test/ad.jpg"), require("../../assets/image/test/d.jpg")],
      id: "张文瀚",
      time: "3分钟前",
      head: require("../../assets/image/me/boy.svg"),
      number: 55
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.dmain {
  position: absolute;
  height: 85%;
  width: 100%;
  top: 7.5%;
  overflow: scroll;
  overflow-x: hidden;
}

.dmain-single {
  height: auto;
  min-height: 150px;
  width: 100%;
  background-color: white;
  margin-bottom: 5px;
}

.dmain-single-top {
  position: relative;
  width: 100%;
  height: 125px;
}

.dmain-single-top-name {
  width: 100%;
  height: 50px;
  display: flex;
}

.dmain-single-top-name-head {
  margin-top: 9px;
  margin-left: 9px;
  height: 30px;
  width: 30px;
  border-radius: 30px;
  border: 1px solid #ccc;
  background-size: 100% 100%;
}

.dmain-single-top-name-id {
  position: absolute;
  left: 15%;
  top: 5%;
}

.dmain-single-top-name-id-time {
  font-size: 12px;
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.80);
  color: #ccc;
}

.dmain-single-top-name-id-font {
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  font-family: 'siyuan';
}

.dmain-single-top-passage {
  letter-spacing: 1px;
  position: absolute;
  height: 75px;
  margin-left: 7px;
  margin-right: 7px;
}

.dmain-single-photo {
  position: relative;
  height: auto;
  min-height: 50px;
  width: 100%;
  margin: 0 auto;
  left: 2%;
}

.dmain-single-photo-single {
  position: relative;
  height: 95px;
  width: 30%;
  margin-left: 5px;
  margin-bottom: 3px;
  float: left;

}

.dmain-single-photo-single img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dmain-single-function {
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
}

.dmain-single-function-single {
  position: relative;
  width: 30%;
  heigth: 50%;
  margin-left: 12%;
  top: 30%;
}

.dmain-single-function-single img {
  height: 18px;
  width: 18px;
  float: left;
}
.dmain-single-function-single div{

  position:relative;
  left:9%;
  top:-2%;
  font-size: 17px;
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.80);
  color: #707070;
}
</style>
