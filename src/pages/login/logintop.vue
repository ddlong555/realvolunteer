<template>
  <div class="top">
    <div class="top-back" @click="back">
      <img src="../../assets/image/me/login/close.svg" alt="">
    </div>
    <div class="top-add">
      帮助
    </div>
  </div>
</template>

<script>
export default {
  name: "logintop",
  methods:{
    back() {
      // console.log(this.$router);
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.top {
  position: absolute;
  height: 7%;
  width: 100%;
}

.top-back {
  position: absolute;
  text-align: center;
  padding-top: 5px;
  padding-left:5px;
  width: 30px;
  height: 25px;
  top: 17%;

  z-index: 1;
}

.top-back img {

  height: 22px;
  width: 22px;
}

.top-add {
  position: absolute;
  height: 70%;
  width: 15%;
  left: 85%;
  top: 30%;
  text-align: center;
  font-size: 12px;
}

</style>
