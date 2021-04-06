<template>
  <div class="top">
    <div class="top-title">
      讨论区
    </div>
    <div class="top-add" @click="GotosendArticle">
      <img src="../../assets/image/discussion/write.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  methods:{
    GotosendArticle(){
      this.$router.push('/sendArticle')
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
.top-add{
  position:absolute;
  left: 90%;
  top:28%;
}
.top-add img{
  height:16px;
  width:16px;
}
.top-title{
  position: absolute;
  font-size: 18px;
  letter-spacing: 2px;
  text-align: center;
  height:70%;
  width:30%;
  left:35%;
  top:22%;
}
</style>
