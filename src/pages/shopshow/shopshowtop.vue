<template>
  <div class="top">
    <div class="top-back" @click="back">
      <img src="../../assets/image/discussion/back.png" alt="">
    </div>
    <div class="top-title">
      兑换详情
    </div>
    <div class="top-add">
      <img src="../../assets/image/video/share3.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "shopshowtop",
  methods: {
    back() {
      // console.log(this.$router);
      this.$router.back();
    }
  }
}
</script>

<style scoped>
.top {
  position: relative;
  height: 7%;
  width: 100%;
  background-color: white;
}

.top-back {
  position: absolute;
  text-align: center;
  padding-top: 5px;
  width: 30px;
  height: 25px;
  top: 10%;
  z-index: 1;
}

.top-back img {

  height: 23px;
  width: 17px;
}

.top-add {
  position: absolute;
  width: 20px;
  left: 91%;
  top: 29%;
}

.top-add img {
  height: 20px;
  width: 20px;
}

.top-title {
  position: absolute;
  font-size: 18px;
  letter-spacing: 2px;
  left: 10%;
  height: 70%;
  width: 30%;
  top: 18%;
}
</style>
