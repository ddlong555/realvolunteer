<template>
  <div class="videosingle" @click="videoshow">
    <div  class="videosingle-content" v-for="(index) in 7" :key="index" :style="{backgroundImage:'url('+src+')'}">
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
  data(){
    return {
      src:require("../../../assets/image/test/a.jpg")
    }
  },
  methods:{
    videoshow(){
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
.videosingle{
  position: absolute;
  top:5%;
  width:100%;
  height:95%;
}
.videosingle-content{
  position: relative;
  width:44%;
  height:48%;
  top:4%;
  left:4%;
  margin-right: 4%;
  margin-bottom: 4%;
  float: left;
  border-radius: 8px;
  background-color: white;
  background-size: 100% 100%;
}
.videosingle-content-block{
  position: absolute;
  width:100%;
  height:31%;
  top:70%;
  background-color: white;
  border-radius: 8px;
}
.block{
  width:100%;
  height:10%;
  position: relative;
  background-color: white;
}
.videosingle-content-block-name{
  /*background-color: black;*/
  position: absolute;
  width:90%;
  height:52px;
  font-size: 12px;
  left: 5%;
  overflow: hidden;
}
.videosingle-content-block-function{
  position: relative;
  display: flex;
  width: 100%;
  height: 35%;
  top:51%;
}
.videosingle-content-block-function-single{
  position: relative;
  width: 25%;
  heigth: 50%;
  left: 5%;
  top: 42%;
}
.videosingle-content-block-function-single img{
  float: left;
  height:14px;
  width: 14px;
}
.videosingle-content-block-function-single div{
  position:relative;
  left:20%;
  top:0%;
  font-size: 12px;
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.80);
  color: #707070;
}
</style>
