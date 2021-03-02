<template>
  <div class="main">
    <div class="main-top">
      <div class="main-top-address">上海</div>
      <div class="main-top-search">
        <img src=../../../assets/image/firstpage/search.svg alt="">
        <input type="text" placeholder="华东师范大学招募"/>
      </div>
      <div class="main-top-right">
        <img src="../../../assets/image/firstpage/add.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "top",
  components: {},
  data() {
    return {}
  },
}
</script>

<style lang="stylus" scoped>
.main {
  display: flex;
  position: relative;
  width: 100%;
  height: 8%;
  background-color white
}

.main-top {
  position absolute
  width:100%;
  height:80%;
  top:20%;
}

.main-top-address {
  letter-spacing: 2px;
  position: absolute;
  left: 15px;
  top: 5px;
}

.main-top-search {
  position: absolute;
  left: 24%;
  width: 58%;
  height: 100%;
}

.main-top-search input {
  width: 100%;
  -webkit-appearance none;
  background-color: #f2f3f5;
  background-image: none;
  border-radius: 30px;
  border: 1px solid white;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #000;
  display: inline-block;
  height: 75%;
  line-height: 36px;
  outline: 0;
  padding: 0 25px;
  text-indent: 5px;
  font-size: 14px;
  font-weight: 500;
}

.main-top-search img {
  position: absolute;
  left: 4%;
  top:25%;
  height: 13px;
  width: 13px;
}

.main-top-right {
  position: absolute;
  right: 5%;
  top: 10%;
}

.main-top-right img {
  width: 23px;
  height: 23px;
}


</style>
