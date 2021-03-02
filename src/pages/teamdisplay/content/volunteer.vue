<template>
  <div class="volunteer">
    <div class="background">
      <img src="../../../assets/image/teamdis/line.jpg" alt=""/>
    </div>
    <div class="heart">
      <img src="../../../assets/image/teamdis/heart.svg" alt=""/>
    </div>
    <div class="time-pic">
      <img src="../../../assets/image/teamdis/1.png" alt=""/>
    </div>
    <div class="time">
    <p1><b>志愿时长：</b><br></p1>
    <p2>XX天XX小时</p2>
   </div>
    <div class="people-pic">
      <img src="../../../assets/image/teamdis/2.png" alt=""/>
    </div>
    <div class="people">
      <p1><b>帮助人数：</b><br></p1>
      <p2>XX人</p2>
    </div>
    <div class="activity-pic">
      <img src="../../../assets/image/teamdis/3.png" alt=""/>
    </div>
    <div class="activity">
      <p1><b>活动次数:</b><br></p1>
      <p2 @click="gotoTeamActivity">XX</p2>
    </div>
  </div>
</template>

<script>
export default {
  name: "volunteer",
  methods:{
    gotoTeamActivity(){
      this.$router.replace('/TeamActivity')
    }
  }
}
</script>

<style scoped>
.background{
  position:absolute;
  top:55%;
}
.background img{
  height:240px;
  width:600px;
}
.heart{
  position:fixed;
  top:60%;
  left:38%;
}
.heart img{
  height:140px;
  width:140px;
}
.time-pic{
   position:fixed;
   top:57%;
   left:10%;
 }
.time-pic img{
  height:100px;
  width:200px;
}
.time{
  position:fixed;
  top:60%;
  left:16%;
  padding:10px;
  border-style:none;
  border-width:5px;
  text-align: center;
}
.time p1{
  font-size:1.2em;
}
.people-pic{
  position:fixed;
  top:57%;
  left:57%;
}
.people-pic img{
  height:100px;
  width:200px;
}
.people{
  position:fixed;
  top:60%;
  left:65%;
  padding:10px;
  border-style:none;
  border-width:5px;
  text-align: center;
}
.people p1{
  font-size:1.2em;
}
.activity-pic{
  position:fixed;
  top:74.5%;
  left:33%;
}
.activity-pic img{
  height:100px;
  width:200px;
}
.activity{
  position:fixed;
  top:77%;
  left:42%;
  padding:10px;
  border-style:none;
  border-width:5px;
  text-align: center;
}
.activity p1{
  font-size:1.2em;
}
.activity p2{
  text-decoration:underline;
  color:blue;
}
</style>
