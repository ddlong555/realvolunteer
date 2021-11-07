<template>
  <div class="information">
    <div class="pic">
      <img :src="background" alt=""/>
    </div>
    <div class="inform">
      <div class="name">
        <h>{{ title }}</h>
      </div>
      <div class="people">
        <h>参加人数:{{ name }}</h>
      </div>
      <div class="place">
        <h>地点:{{ place }}</h>
      </div>
      <div class="evaluate">
        <p>活动详情：</p>
        <p>{{ evaluate }}</p>
      </div>
    </div>
    <van-button class="button1" type="primary" color="red" block>上传报名表</van-button>
    <div class="like">
      <img v-if="!yesoryes" src="../../../assets/image/activity/H.svg" @click="change" alt="" />
      <img v-else src="../../../assets/image/activity/Heart.svg" @click="change" alt="" />
    </div>
    <van-button class="button2" type="primary" color="black" block>下载报名表</van-button>
  </div>
</template>

<script>
export default {
  name: "information",
  data(){
    return{
      background: require('../../../assets/image/test/ad.jpg'),
      title:"保护母亲河主题志愿服务活动",
      name:"somebody",
      place:"中国上海",
      evaluate:"这活动挺好的。这活动挺好的。这活动挺好的。这活动挺好的。这活动挺好的。这活动挺好的。这活动挺好的。这活动挺好的。这活动挺好的。这活动挺好的。",
      yesoryes: false,
    }
  },
  created(){
    var that = this
    // console.log("1:",that.$route.query.activityId);
    this.$axios.get("/api/volunteer/activity/getActivityByActivityId",
        {
          params:{
            activityId: this.$route.query.activityId
          },
          headers: {
            token: that.$store.getters.getToken
          }
        })
        .then((res) => {
          if(res!=null){
            console.log(res);
            that.title = res.data.result.activityName
            that.place = res.data.result.activityPlace
            that.evaluate = res.data.result.activityContent
            that.name = res.data.result.enrolledNumber
            that.background = this.$route.query.PictureList
          }
          else{
            alert("?")
          }
        })
        .catch((error) => {
          console.log(error);
        });
  },
  methods:{
    change(){
      this.yesoryes = !this.yesoryes
    }
  }
}
</script>

<style scoped>
.information{
  position: absolute;
  height: 92%;
  width: 100%;
  top: 7.5%;
  overflow: scroll;
}
.pic{
  position: absolute;
  top: 5%;
  height: 20%;
  width: 80%;
  left: 10%;
  right: 10%;
}
.pic img{
  height: 100%;
  width: 100%;
}
.name{
  position: absolute;
  top: 30%;
  height: 7%;
  width: 100%;
  left: 0%;
  right: 0%;
  background: white;
}
.name h{
  position: relative;
  left: 10%;
  top: 25%;
  font-family: 'siyuan';
}
.people{
  position: absolute;
  top: 38%;
  height: 7%;
  width: 100%;
  left: 0%;
  right: 0%;
  background: white;
}
.people h{
  position: relative;
  left: 10%;
  top: 25%;
  font-family: 'siyuan';
}
.place{
  position: absolute;
  top: 46%;
  height: 7%;
  width: 100%;
  left: 0%;
  right: 0%;
  background: white;
}
.place h{
  position: relative;
  left: 10%;
  top: 25%;
  font-family: 'siyuan';
}
.evaluate{
  position: absolute;
  top: 54%;
  height: auto;
  width: 100%;
  left: 0%;
  right: 0%;
  background: white;
}
.evaluate p{
  position: relative;
  left: 10%;
  right: 0%;
  width: 90%;
  top: 35%;
  font-family: 'siyuan';
  text-align: left;
}
.button1{
  position: absolute;
  color: black;
  bottom: 5%;
  left: 10%;
  width: 30%;
}
.like{
  position: absolute;
  bottom: 5%;
  left: 45%;
}
.like img{
  height: 300%;
  width: 200%;
}
.button2{
  position: absolute;
  color: black;
  bottom: 5%;
  right: 10%;
  width: 30%;
}
</style>