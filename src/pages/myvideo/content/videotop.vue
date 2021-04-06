<template>
  <div class="videotop">
    <div class="videotop-top">
      <div class="videotop-top-title">
        视频专区
      </div>
      <div class="videotop-top-add" @click="Gotosendvideo">
        <img src="../../../assets/image/firstpage/add.svg" alt="">
      </div>
    </div>
    <div class="videotop-children">
      <div class="list"  v-for="(item, index) in nav"  :key="index" @click="clicknav(item)" :class="{'listClick' : isClick}">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "videotop",
  data() {
    return {
      nav: ['技术援助','教育','共同富裕','动物救治'],
      isClick1:false,
      isClick2:false,
      isClick3:false,
      isClick4:false,
    }
  },
  created() {

  },
  computed:{
    isClick(){
      console.log(this.$route.path.indexOf(this.path))
      return this.$route.path.indexOf(this.path)!=-1
    }
  },
  methods:{
    Gotosendvideo(){
      this.$router.push('/sendVideo')
    },
    clicknav(e){

      console.log(this.nav[e])
    }
  }
}
</script>

<style scoped>

.videotop{
  position: relative;
  width:100%;
  height:12%;
  /*background-color: #e04438;*/
  /*color:white;*/
}
.videotop-top {
  position: relative;
  height: 40%;
  width: 100%;
}

.videotop-top-add {
  position: absolute;
  left: 90%;
  top: 34%;
}

.videotop-top-add img {
  height: 20px;
  width: 20px;
}

.videotop-top-title {
  position: absolute;
  font-size: 18px;
  letter-spacing: 2px;
  text-align: center;
  height: 70%;
  width: 30%;
  left: 35%;
  top: 25%;
}
.videotop-children{
  position: relative;
  width:100%;
  height:30%;
  margin-top: 5%;
  /*background-color: #5bffcc;*/
  display: flex;
  overflow-x:scroll;
  overflow-y:hidden;
}
.videotop-children::-webkit-scrollbar {
  display: none;
}
.list{
  white-space: nowrap;
  position: relative;
  font-size: 13px;
  width:50%;
  height:100%;
  margin-right: 5%;
  margin-left: 5%;
}
.listClick{

}
</style>
