<template>
  <div class="me-bottom">
    <div class="widget">
      <div class="widget-part" @click="Gotoperson">
        <img src="../../../assets/image/me/xiugai.svg" alt=""/>
        <div class="widget-part-title">
          信息修改
        </div>
      </div>
      <div class="widget-part" @click="Gotome">
        <img src="../../../assets/image/me/infor.svg" alt=""/>
        <div class="widget-part-title">
          个人信息
        </div>
      </div>
      <div class="widget-part" @click="Gotomessage" >
        <img src="../../../assets/image/me/message.svg" alt="" />
        <div class="widget-part-title">
          我的消息
        </div>
      </div>
      <div class="widget-part" @click="Gotoshop">
        <img src="../../../assets/image/me/score.svg" alt=""/>
        <div class="widget-part-title">
          我的积分
        </div>

      </div>
    </div>
    <div :class="{'fixed' : isFixed}"></div>
    <div class="act-nav" id="boxFixed" :class="{'is_fixed' : isFixed}">
      <a href="javascript:void(0);" @click="goAnchor1('followed')" ref="a">已关注</a>
      <a href="javascript:void(0);" @click="goAnchor2('booked')" ref="b">已报名</a>
      <a href="javascript:void(0);" @click="goAnchor3('released')" ref="c">已发布</a>
      <a href="javascript:void(0);" @click="goAnchor4('participated')" ref="d">已参加</a>
    </div>
    <div class="act" v-if="this.islogin&&this.i==4">
      <div class="Anchorpoint" id="followed"></div>
      <div class="act-single"  v-for="(item,index) in activity[0]" :key="index+'a'" @click="Gotoact(item.activityId,item.activityPictureList[0].pictureUrl)">
        <img :src=item.activityPictureList[0].pictureUrl alt=""/>
        <!--          <img src="https://activity-picture.oss-cn-shanghai.aliyuncs.com/activityPicture_1/1.png" alt=""/>-->
        <div>
          {{ item.activityName }}
        </div>
      </div>
      <div class="Anchorpoint" id="booked"></div>
      <div class="act-single" v-for="(item1,index1) in activity[1]" :key="index1+'b'" @click="Gotoact(item.activityId,item.activityPictureList[0].pictureUrl)">
        <img :src=item1.activityPictureList[0].pictureUrl alt=""/>
        <!--          <img src="https://activity-picture.oss-cn-shanghai.aliyuncs.com/activityPicture_1/1.png" alt=""/>-->
        <div>
          {{ item1.activityName }}
        </div>
      </div>
      <div class="Anchorpoint" id="released"></div>
      <div class="act-single"  v-for="(item2,index2) in activity[2]" :key="index2+'c'" @click="Gotoact(item.activityId,item.activityPictureList[0].pictureUrl)">
        <img :src=item2.activityPictureList[0].pictureUrl alt=""/>
        <!--          <img src="https://activity-picture.oss-cn-shanghai.aliyuncs.com/activityPicture_1/1.png" alt=""/>-->
        <div>
          {{ item2.activityName }}
        </div>
      </div>
      <div class="Anchorpoint" id="participated"></div>
      <div class="act-single" v-for="(item3,index3) in activity[3]" :key="index3+'d'" @click="Gotoact(item.activityId,item.activityPictureList[0].pictureUrl)">
        <img :src=item3.activityPictureList[0].pictureUrl alt=""/>
        <!--          <img src="https://activity-picture.oss-cn-shanghai.aliyuncs.com/activityPicture_1/1.png" alt=""/>-->
        <div>
          {{ item3.activityName }}
        </div>
      </div>
    </div>
    <div class="block">

    </div>
  </div>
</template>

<script>
function offset(obj, direction) {
  //将top,left首字母大写,并拼接成offsetTop,offsetLeft
  var offsetDir = 'offset' + direction[0].toUpperCase() + direction.substring(1);

  var realNum = obj[offsetDir];
  var positionParent = obj.offsetParent;  //获取上一级定位元素对象

  while (positionParent != null) {
    realNum += positionParent[offsetDir];
    positionParent = positionParent.offsetParent;
  }
  return realNum;
}

export default {
  name: "MeBottom",
  data() {
    return {
      isFixed: false,
      offsetTop: 0,
      activity: [{},{},{},{}],
      i:0
    }
  },
  computed:{
    islogin(){
      return this.$store.getters.getLogin
    }
  },
  watch: {
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight);
    this.$nextTick(() => {
      //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
      this.offsetTop = offset(document.querySelector('#boxFixed'), 'top');
      // console.log(document.querySelector('#boxFixed').offsetParent.offsetTop);
    })
  },
  created() {
    var that = this
    //活动接口
    if (this.$store.getters.getLogin == true) {
      this.i=0;
      this.activity=[]
      this.$axios.get("/api/volunteer/activityUser/getActivityStateByNumber",
          {
            params: {
              number: 0,
            },
            headers: {
              token: that.$store.getters.getToken
            }
          })
          .then((res) => {
            if (res != null){
              this.activity[0]=res.data.result;
              this.i++;
            }
            console.log(this.islogin);
          })
          .catch((error) => {
            console.log(error);
          });
      this.$axios.get("/api/volunteer/activityUser/getActivityStateByNumber",
          {
            params: {
              number: 1,
            },
            headers: {
              token: that.$store.getters.getToken
            }
          })
          .then((res) => {
            if (res != null){
              this.activity[1]=res.data.result;
              this.i++;
            }
            console.log("act", this.activity);
          })
          .catch((error) => {
            console.log(error);
          });
      this.$axios.get("/api/volunteer/activityUser/getActivityStateByNumber",
          {
            params: {
              number: 2,
            },
            headers: {
              token: that.$store.getters.getToken
            }
          })
          .then((res) => {
            if (res != null){
              this.activity[2]=res.data.result;
              this.i++;
            }
            console.log("act", this.activity);
          })
          .catch((error) => {
            console.log(error);
          });
      this.$axios.get("/api/volunteer/activityUser/getActivityStateByNumber",
          {
            params: {
              number: 3,
            },
            headers: {
              token: that.$store.getters.getToken
            }
          })
          .then((res) => {
            if (res != null){
              this.i++;
              this.activity[3]=res.data.result;
            }
            console.log("act", this.activity);
          })
          .catch((error) => {
            console.log(error);
          });
    }
  },
  methods: {
    Gotoperson() {
      console.log(this.$store.getters.getToken)
      // const jwt = require('jsonwebtoken')
      // const decode = jwt.decode('token')
      // console.log(decode)
      this.$router.push('/informationChange')
    },
    Gotomessage() {
      this.$router.push('/message')
    },
    Gotoshop() {
      this.$router.push('/score')
    },
    Gotome() {
      this.$router.push('/personalInformation')
    },
    goAnchor1(e) {
      document.getElementById(e).scrollIntoView({
        behavior: "smooth",  // 平滑过渡
        block: "start"  // 上边框与视窗顶部平齐。默认值
      });
      this.$refs.a.style.fontWeight = 'bold';
      this.$refs.b.style.fontWeight = 'normal';
      this.$refs.c.style.fontWeight = 'normal';
      this.$refs.d.style.fontWeight = 'normal';

    },
    goAnchor2(e) {
      document.getElementById(e).scrollIntoView({
        behavior: "smooth",  // 平滑过渡
        block: "start"  // 上边框与视窗顶部平齐。默认值
      });
      this.$refs.a.style.fontWeight = 'normal';
      this.$refs.b.style.fontWeight = 'bold';
      this.$refs.c.style.fontWeight = 'normal';
      this.$refs.d.style.fontWeight = 'normal';
    },
    goAnchor3(e) {
      document.getElementById(e).scrollIntoView({
        behavior: "smooth",  // 平滑过渡
        block: "start"  // 上边框与视窗顶部平齐。默认值
      });
      this.$refs.a.style.fontWeight = 'normal';
      this.$refs.b.style.fontWeight = 'normal';
      this.$refs.c.style.fontWeight = 'bold';
      this.$refs.d.style.fontWeight = 'normal';
    },
    goAnchor4(e) {
      document.getElementById(e).scrollIntoView({
        behavior: "smooth",  // 平滑过渡
        block: "start"  // 上边框与视窗顶部平齐。默认值
      });
      this.$refs.a.style.fontWeight = 'normal';
      this.$refs.b.style.fontWeight = 'normal';
      this.$refs.c.style.fontWeight = 'normal';
      this.$refs.d.style.fontWeight = 'bold';
    },

    initHeight() {
      // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //如果被卷曲的高度大于吸顶元素到顶端位置 的距离
      this.isFixed = scrollTop > this.offsetTop ? true : false;
      // console.log("offset:",this.offsetTop);
      // console.log(scrollTop);
    },
    Gotoact(e,f){
      this.$router.push({
        path: '/activityDisplay',
        query: {
          activityId: e,
          PictureList:f}
      })
    },
  },

  destroyed() {
    window.removeEventListener('scroll', this.handle)
  }
}
</script>

<style lang="stylus" scoped>
.me-bottom {
  width: 100%;
  position: relative;
  height: 68%;
}

.widget {
  display: flex;
  width: 96%;
  height: 80px;
  position: relative;
  margin-top: 8px;
  left: 2%;
  background-color: white;
  border-radius: 20px;
}

.act-nav {
  width: 96%;
  position: relative;
  height: 8%;
  left: 2%;
}

.fixed {
  width: 96%;
  position: relative;
  height: 8%;
  left: 2%;
}


.act-nav a {
  position: relative;
  left: 15px;
  margin-left: 25px;
  height: 40px;
  line-height: 40px;
  width: 30%;
  color: black;
}

.act {
  width: 96%;
  position: relative;
  left: 2%;
}

.act-part {
  display: flex;
  width: 100%;
  height: 70px;
  left: 2%;
  margin-top: 10px;
  background-color: white;
  border-radius: 20px;
}

.act-part img {
  width: 50px;
  height: 40px;
  position: relative;
  top: 5px;
  left: 8px;
}

.act-part-title {
  position: relative;
  left: 30px;
  top: 5px;
  width: 300px;
  height: 40px;
}

.act-part-number {
  position: relative;
  left: -80px;
  top: 30px;
  width: 30px;
  height: 40px;
}

.widget-part {
  position: relative;
  left: 7%;
  top: 15px;
  height: 60px;
  width: 22%;
}

.is_fixed {
  position: fixed;
  top: 0;
  z-index: 999;
  margin: 0;
  left: 0%;
  width: 100%;
  height: 7%;
  background-color: white;
}

.widget-part img {
  position: relative;
  left: 20px;
  height: 30px;
  width: 30px;
}

.widget-part-title {
  position: relative;
  left: 10px;
  font-size: 10px;
  height: 30px;
  width: 70px;
}

.Anchorpoint {
  position: relative;
  height: 0;
  width: 100%;
}

.block {
  height: 20%;
  width: 100%;
}
.act-single {
  position: relative
  left: 2%;
  width: 96%;
  height auto
  margin-top: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;
  border-radius: 15px;
}

.act-single img {
  width: 95%;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
}

.act-single div {
  position relative
  font-size 13px
  text-align left
  left 3%
  letter-spacing 1px
}
</style>
