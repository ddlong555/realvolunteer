<template>
  <div class="top3">
    <div class="top">
      <div class="top3-img1">
        <img @click="back" src="../../assets/image/personalInformation/return.svg" alt=""/>
      </div>
      <div class="top3-img2">
        <img @click="dialogVisible = true" src="../../assets/image/personalInformation/share.svg" alt=""/>
        <el-dialog title="分享至" :visible.sync="dialogVisible">
          <el-table :data="app">
            <el-table-column property="way" label="方式"></el-table-column>
          </el-table>
        </el-dialog>
      </div>
    </div>
    <div class="circle">
      <img :src= "avatar" alt=""/>
    </div>
    <div class="nickname">
      <p v-text="nickname"></p>
    </div>
    <div class="below">
      <ul class="sexual">
        <li>{{sexual}}</li>
      </ul>
      <ul class="age">
        <li>{{month}}月{{day}}日（公历）</li>
      </ul>
      <ul class="sign" :style="{'list-style':'url('+sign+')'}">
        <li>{{signWord}} </li>
      </ul>
      <ul class="place">
        <li>{{place}}</li>
      </ul>
      <ul class="major">
        <li>{{major}}</li>
      </ul>
      <ul class="declaration">
        <li>{{declaration}}</li>
      </ul>
      <ul class="point">
        <li>积分：{{point}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "personalInformation",
  data(){
    return{
      app:[{
        way:'微信'
      },{
        way:'微信朋友圈'
      },{
        way:'qq'
      },{
        way:'qq空间'
      },{
        way:'微博'
      }],
      dialogVisible:false,
      nickname:"student123",
      declaration:"快乐每一天!今天也要成为比昨天更好的人！！不知道该说什么了就先随便乱打几个字凑一下版面吧",
      sexual:"男",
      month:12,
      day:7,
      place:"中国-上海",
      signWord:"射手座",
      major:"软件工程",
      avatar: require('../../assets/image/personalInformation/avatar.jpg'),
      sign: require('../../assets/image/personalInformation/xingzuo.svg'),
      point: 3,
    }
  },
  created(){
    var that = this
    this.$axios.get("/api/volunteer/userInfo/getUserInfoByUserId",
        {
          headers: {
            token: that.$store.getters.getToken
          }
        })
        .then((res) => {
          if(res!=null){
            console.log(res);
            that.nickname = res.data.result.userName
            that.place = res.data.result.address
            that.declaration = res.data.result.introduction
            that.sexual = res.data.result.gender
            that.major = res.data.result.major
            that.avatar = res.data.result.headPicture
            var date =  new Date(res.data.result.birthday)
            that.month = date.getMonth()+1
            that.day = date.getDay()
            that.point = res.data.result.credits
            console.log(res.data.result.birthday.getMonth())
            console.log(res.data.result.birthday.getDay())
            // alert("hgagdjs")
          }
        })
        .catch((error) => {
          console.log(error);
        });
  },
  methods:{
    back(){
      this.$router.back()
    }
  }
}

</script>

<style scoped>
.top3{
  position:absolute;
  height:92%;
  width:100%;
  font-family: "siyuan";
  background: linear-gradient(to top,#d3959b,#bfe6ba);
  overflow: scroll;
}
.top{
  height :7%;
  width :100%;
  position:absolute;
  box-shadow: 5px 5px 5px rgba(127,127,127,.4);
  z-index: 2;
  background-color: white;
}
.below{
  position:absolute;
  top: 27%;
  left: 10%;
  height:80%;
  width:80%;
}
.top3-img1{
  height:50px;
  width:50px;
  position:absolute;
  top:10%;
  left:1%;
}
.top3-img1 img{
  height:25px;
  width:25px;
}
.top3-img2{
  position:absolute;
  top:10%;
  right:1%;
}
.top3-img2 img{
  height:25px;
  width:25px;
}
.circle{
  position: absolute;
  top: 8%;
  left: 7%;
  right: 50%;
}
.circle img{
  border-radius: 50%;
  border: 2px solid white;
  width:100px;
  height:100px;
}
.nickname{
  position: absolute;
  top: 8%;
  left: 45%;
}
.nickname p{
  font-size: 30px;
  color: white;
}
.sexual{
  border-radius:50px;
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
}
.sexual li{
  padding: 5px 10px 5px;
  list-style:url("../../assets/image/personalInformation/sexual.svg");
  font-size:15px;
}
.age{
  border-radius:50px;
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
}
.age li{
  padding: 5px 10px 5px;
  list-style:url("../../assets/image/personalInformation/age.svg");
  font-size:15px;
}
.sign{
  border-radius:50px;
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
}
.sign li{
  padding: 5px 10px 5px;
  list-style:plainLink;
  font-size:15px;
}
.place{
  border-radius:50px;
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
}
.place li{
  padding: 5px 10px 5px;
  list-style:url("../../assets/image/personalInformation/place.svg");
  font-size:15px;
}
.major{
  border-radius:50px;
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
}
.major li{
  padding: 5px 10px 5px;
  list-style:url("../../assets/image/personalInformation/major.svg");
  font-size:15px;
}
.declaration{
  border-radius:20px;
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
}
.declaration li{
  padding: 5px 10px 5px;
  list-style:url("../../assets/image/personalInformation/declare.svg");
  font-size:15px;
}
.point{
  border-radius:20px;
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
}
.point li{
  padding: 5px 10px 5px;
  list-style:url("../../assets/image/personalInformation/point.svg");
  font-size:15px;
}
</style>
