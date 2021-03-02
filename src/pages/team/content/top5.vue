<template>
  <div class="top5">
    <div class="top">
      <h>发布团队</h>
      <div class="top-img1">
        <img @click="back" src="../../../assets/image/personalInformation/return.svg" alt=""/>
      </div>
    </div>
    <div class="cross-line"></div>
  </div>
</template>

<script>
export default {
  name: "top5",
  methods:{
    back(){
      this.$router.replace('/personalInformation')
    },
  }
}
</script>

<style scoped>
.top5{
  height:10%;
  width:100%;
  font-family:"siyuan";
}
.top{
  height :7%;
  width :100%;
  position:absolute;
  background-color: white;
}
.cross-line{
  position:absolute;
  top:7%;
  height:3%;
  width:100%;
  background:linear-gradient(darkgray,#f7f7f7);
}
.top-img1{
  height:50px;
  width:50px;
  position:absolute;
  top:2%;
  left:1%;
}
.top-img1 img {
  height:40px;
  width:40px;
}
.top h{
  position:absolute;
  top:25%;
  left:45%;
  font-size:20px;
}
</style>

