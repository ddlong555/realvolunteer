<template>
  <div class="top">
    <div class="top-back" @click="back">
      <img src="../../assets/image/discussion/back.png" alt="">
    </div>
    <div class="top-title">
      消息
    </div>
    <div class="top-add">
      <img src="../../assets/image/discussion/reading.svg" alt="">
      <div class="top-add-div">
        标记已读
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "message-top",
  methods:{
    back(){
      // console.log(this.$router);
      this.$router.back();
    }
  }
}
</script>

<style scoped>
.top {
  position: absolute;
  height: 7%;
  width: 100%;
  background-color: white;
}
.top-back{
  position: absolute;
  text-align: center;
  padding-top: 5px;
  width:30px;
  height:25px;
  top:10%;
  z-index: 1;
}
.top-back img{

  height:23px;
  width:17px;
}
.top-add{
  position:absolute;
  width:20%;
  left: 80%;
  top:29%;
}
.top-add img{
  float:left;
  height:16px;
  width:16px;
}
.top-add-div{

  font-size: 13px;
}
.top-title{
  position: absolute;
  font-size: 18px;
  letter-spacing: 2px;
  text-align: center;
  height:70%;
  width:30%;
  top:18%;
}
</style>
