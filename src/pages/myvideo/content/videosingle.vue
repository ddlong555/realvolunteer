<template>
  <div class="videosingle" @click="videoshow">
    <div class="videosingle-content" v-for="(index) in 7" :key="index" :style="{backgroundImage:'url('+src+')'}">
      <div class="videosingle-content-block">
        <div class="block"></div>
        <div class="videosingle-content-block-name">
          这是什么神仙班级，气势太强了,真的好强，真的好强，真的好强
        </div>
        <div class="videosingle-content-block-function">
          <div class="videosingle-content-block-function-single">
            <img src="../../../assets/image/video/run.svg">
            <div>300</div>
          </div>
          <div class="videosingle-content-block-function-single">
            <img src="../../../assets/image/discussion/good.svg">
            <div>200</div>
          </div>
        </div>
      </div>
    </div>
    <div class="videosingle-content" :style="{backgroundImage:'url('+src+')'}" id="abc">

      <div class="videosingle-content-block" >
        <div class="block"></div>
        <div class="videosingle-content-block-name">
          这是什么神仙班
        </div>
        <div class="videosingle-content-block-function">
          <div class="videosingle-content-block-function-single">
            <img src="../../../assets/image/video/run.svg">
            <div>300</div>
          </div>
          <div class="videosingle-content-block-function-single">
            <img src="../../../assets/image/discussion/good.svg">
            <div>200</div>
          </div>
        </div>
      </div>
    </div>
    <div class="videosingle-content" :style="{backgroundImage:'url('+src+')'}">

      <div class="videosingle-content-block">
        <div class="block"></div>
        <div class="videosingle-content-block-name">
          这是什么神仙班级，气势太强了,真的好强，真的好强，真的好强
        </div>
        <div class="videosingle-content-block-function">
          <div class="videosingle-content-block-function-single">
            <img src="../../../assets/image/video/run.svg">
            <div>300</div>
          </div>
          <div class="videosingle-content-block-function-single">
            <img src="../../../assets/image/discussion/good.svg">
            <div>200</div>
          </div>
        </div>
      </div>
    </div>
    <div class="videosingle-content" :style="{backgroundImage:'url('+src+')'}">

      <div class="videosingle-content-block">
        <div class="block"></div>
        <div class="videosingle-content-block-name">
          这是什么神仙班级，气势太强了,真的好强，真的好强，真的好强
        </div>
        <div class="videosingle-content-block-function">
          <div class="videosingle-content-block-function-single">
            <img src="../../../assets/image/video/run.svg">
            <div>300</div>
          </div>
          <div class="videosingle-content-block-function-single">
            <img src="../../../assets/image/discussion/good.svg">
            <div>200</div>
          </div>
        </div>
      </div>
    </div>
    <div class="videosingle-content" :style="{backgroundImage:'url('+src+')'}">

      <div class="videosingle-content-block">
        <div class="block"></div>
        <div class="videosingle-content-block-name">
          这是什么神仙班级，气势太强了,真的好强，真的好强，真的好强
        </div>
        <div class="videosingle-content-block-function">
          <div class="videosingle-content-block-function-single">
            <img src="../../../assets/image/video/run.svg">
            <div>300</div>
          </div>
          <div class="videosingle-content-block-function-single">
            <img src="../../../assets/image/discussion/good.svg">
            <div>200</div>
          </div>
        </div>
      </div>
    </div>
    <div class="videosingle-content" :style="{backgroundImage:'url('+src+')'}">
      <div class="videosingle-content-block">
        <div class="block"></div>
        <div class="videosingle-content-block-name">
          这是什么神仙班级，气势太强了,真的好强，真的好强，真的好强
        </div>
        <div class="videosingle-content-block-function">
          <div class="videosingle-content-block-function-single">
            <img src="../../../assets/image/video/run.svg">
            <div>300</div>
          </div>
          <div class="videosingle-content-block-function-single">
            <img src="../../../assets/image/discussion/good.svg">
            <div>200</div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "videosingle",
  data() {
    return {
      src: require("../../../assets/image/test/a.jpg")
    }
  },
  methods: {
    videoshow() {
      this.$router.push('/videoshow')
    }
  }
  // props: {
  //   videolist: {
  //     type: Array,
  //     default: () => {
  //       return []
  //     }
  //   }
  //
  // }
}
</script>

<style scoped>
.videosingle {
  position: relative;
  width: 100%;
  height: 95%;
}

.videosingle-content {
  position: relative;
  width: 44%;
  height: 52%;
  top: 4%;
  left: 4%;
  margin-right: 4%;
  margin-bottom: 9%;
  float: left;
  border-radius: 8px;
  background-color: white;
  background-size: 100% 100%;
}

.videosingle-content-block {
  position: relative;
  width: 100%;
  height: 39%;
  top: 70%;
  background-color: white;
  border-radius: 8px;
}

.block {
  width: 100%;
  height: 10%;
  position: relative;
  background-color: white;
}

.videosingle-content-block-name {
  /*background-color: black;*/
  position: relative;
  width: 90%;
  height: auto;
  font-size: 12px;
  left: 5%;
  overflow: hidden;
}

.videosingle-content-block-function {
  position: absolute;
  display: flex;
  width: 100%;
  height: 25%;
  top:60%
}

.videosingle-content-block-function-single {
  position: relative;
  width: 25%;
  heigth: 50%;
  margin-right: 8%;
  margin-left: 5%;
  top: 42%;
}

.videosingle-content-block-function-single img {
  float: left;
  height: 16px;
  width: 16px;
}

.videosingle-content-block-function-single div {
  position: relative;
  left: 20%;
  top: 8%;
  font-size: 13px;
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.80);
  color: #707070;
}
</style>
