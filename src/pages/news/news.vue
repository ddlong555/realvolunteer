<template>
  <div class="main">
    <div class="top">
      <div class="top-back" @click="back">
        <img src="../../assets/image/discussion/back.png" alt="">
      </div>
      <div class="top-title">
        华东师范大学志愿者招募
      </div>
    </div>
    <div class="img">
      <pdf ref="pdf" :src="this.$route.query.pdf">
      </pdf>
    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: "news",
  components:{
    pdf
  },
  methods:{
    back(){
      this.$router.back()
    }
  },
  data(){
    return{
      src:this.$route.query.pdf
    }
  },
  created() {
    console.log(this.$route.query.pdf)
  }
}
</script>

<style scoped>
.main{
  position:absolute;
  width:100%;
  height:100%;
}
.top {
  position: absolute;
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


.top-title {
  position: absolute;
  text-align: center;
  font-size: 16px;
  letter-spacing: 2px;
  left: 23%;
  height: 70%;
  width: 55%;
  top: 18%;
  white-space:nowrap;
  overflow: hidden;
}
.img{
  position: absolute;
  width: 100%;
  height:93%;
  top:7%;
  overflow: scroll;
}
.img img{
  width:100%;
}
.a{
  position: absolute;
  width: 30%;
  height: 10%;
  top:550px;
  left:250px;
  z-index: 1;
  font-size: 12px;
  -webkit-transform: scale(0.82);
}
</style>
