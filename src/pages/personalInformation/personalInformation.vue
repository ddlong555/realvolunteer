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
      <ul class="plain" :style="{'list-style':'url('+plainLink+')'}">
        <li>{{plain}} </li>
      </ul>
      <ul class="blood">
        <li>{{blood}}型 </li>
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
      plain:"射手座",
      major:"软件工程",
      blood:"B",
      avatar: require('../../assets/image/personalInformation/avatar.jpg'),
      plainLink: require('../../assets/image/personalInformation/xingzuo.svg'),
      point: 32
    }
  },
  methods:{
    back(){
      this.$router.replace('/me')
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
  top: 25%;
  left: 5%;
  height:80%;
  width:80%;
}
.top3-img1{
  margin-top: 10px;
  margin-left: 10px;
}
.top3-img1 img{
  height:25px;
  width:25px;
}
.top3-img2{
  float: right;
  margin-top: -30px;
  margin-right: 10px;
}
.top3-img2 img{
  height:25px;
  width:25px;
}
.circle{
  margin-top: 60px;
  margin-left: 20px;
}
.circle img{
  border-radius: 50%;
  border: 2px solid white;
  width:100px;
  height:100px;
}
.nickname{
  margin-top: -120px;
  margin-left: 27%;
}
.nickname p{
  font-size: 40px;
  color: white;
}
.sexual{
  border-radius:50px;
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
}
.sexual li{
  list-style:url("../../assets/image/personalInformation/sexual.svg");
  font-size:20px;
}
.age{
  border-radius:50px;
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
}
.age li{
  list-style:url("../../assets/image/personalInformation/age.svg");
  font-size:20px;
}
.plain{
  border-radius:50px;
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
}
.plain li{
  list-style:this.plainLink;
  font-size:20px;
}
.blood{
  border-radius:50px;
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
}
.blood li{
  list-style:url("../../assets/image/personalInformation/blood.svg");
  font-size:20px;
}
.place{
  border-radius:50px;
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
}
.place li{
  list-style:url("../../assets/image/personalInformation/place.svg");
  font-size:20px;
}
.major{
  border-radius:50px;
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
}
.major li{
  list-style:url("../../assets/image/personalInformation/major.svg");
  font-size:20px;
}
.declaration{
  border-radius:20px;
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
}
.declaration li{
  list-style:url("../../assets/image/personalInformation/declare.svg");
  font-size:20px;
}
.point{
  border-radius:20px;
  box-shadow: 0 8px 10px rgba(20, 20, 20, .1);
}
.point li{
  list-style:url("../../assets/image/personalInformation/point.svg");
  font-size:20px;
}
</style>
