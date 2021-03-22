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
      <a href="#abc"><div class="list" v-for="(item, index) in nav"  :key="index" >{{item}}</div></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "videotop",
  data() {
    return {
      nav: ['技术援助','教育','待定1','待定2','待定3','待定2','待定3'],
      currentIndex: 1
    }
  },
  created() {

  },
  methods:{
    Gotosendvideo(){
      this.$router.push('/sendVideo')
    }
  }
}
</script>

<style scoped>

.videotop{
  position: absolute;
  width:100%;
  height:12%;
}
.videotop-top {
  position: absolute;
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
  position: absolute;
  width:100%;
  height:30%;
  /*background-color: #5bffcc;*/
  top:63%;
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
</style>
