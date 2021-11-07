
<template>
  <div class="main">
    <div class="main-top">
      <div v-if="isclick" @click="changeisclick" class="main-top-img">
        <img src="../../../assets/image/me/sun.svg" alt=""/>
      </div>
      <div v-else @click="changeisclick" class="main-top-img">
        <img src="../../../assets/image/me/black.svg" alt=""/>
      </div>
      <div class="main-top-img1" @click="Gotosetting">
        <img src="../../../assets/image/me/setting.svg" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "name",
  data() {
    return {
      count: 30,
      src: require("../../../assets/image/test/ad.jpg"),
      isclick:false,
    }
  },
  methods: {
    changeisclick() {
      this.isclick = !this.isclick
    },
    Gotosetting(){
      this.$router.push('/setting')
    }
  }
}
</script>

<style scoped>

.main {
  width: 100%;
  height: 100%;
}

.main-top {
  width: 17%;
  height: 4%;
  display: flex;
  position:relative;
  left:80%;
  top: 15px;
}

.main-top-img1 img {
  position: relative;
  height: 20px;
  width: 20px;
  top:2px;
}

.main-top-img img {
  height: 24px;
  width: 24px;

}

.main-top-img1 {
  height: 24px;
  width: 24px;
  text-align: center;
  margin-left: 13px;
}

.main-top-img {
  height: 24px;
  width: 24px;
}
</style>
