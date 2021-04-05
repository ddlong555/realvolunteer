<template>
  <div class="me-bottom">
    <div class="widget" >
      <div class="widget-part" @click="Gotoperson" >
        <img src="../../../assets/image/me/score.svg" alt=""/>
        <div class="widget-part-title">
          个人信息
        </div>
      </div>
      <div class="widget-part" @click="test">
        <img src="../../../assets/image/me/score.svg" alt=""/>
        <div class="widget-part-title">
          我的积分
        </div>
      </div>
      <div class="widget-part" @click="Gotomessage">
        <img src="../../../assets/image/me/score.svg" alt=""/>
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
    <div class="act-nav" id="boxFixed" :class="{'is_fixed' : isFixed}" >
        <a href="javascript:void(0);" @click="goAnchor('followed')">已关注</a>
        <a href="javascript:void(0);" @click="goAnchor('booked')">已报名</a>
        <a href="javascript:void(0);" @click="goAnchor('released')">已发布</a>
        <a href="javascript:void(0);" @click="goAnchor('participated')">已参加</a>
    </div>
    <div class="act" >
      <div class="Anchorpoint" id="followed"></div>
      <div v-for="count in 7" :key="count">
        <div class="act-part">
          <img src="../../../assets/image/me/sun.svg" alt=""/>
          <div class="act-part-title">
            华师大垃圾分类监督员
          </div>
          <div class="act-part-number">
            5
          </div>
        </div>
      </div>
      <div class="Anchorpoint" id="booked"></div>
      <div class="act-part">
        <img src="../../../assets/image/me/sun.svg" alt=""/>
        <div class="act-part-title">
          华师大垃圾分类监督员
        </div>
        <div class="act-part-number">
          5
        </div>
      </div>
      <div class="Anchorpoint" id="released"></div>
      <div class="act-part">
        <img src="../../../assets/image/me/sun.svg" alt=""/>
        <div class="act-part-title">
          华师大垃圾分类监督员
        </div>
        <div class="act-part-number">
          5
        </div>
      </div>
      <div class="Anchorpoint" id="participated"></div>
      <div class="act-part">
        <img src="../../../assets/image/me/sun.svg" alt=""/>
        <div class="act-part-title">
          华师大垃圾分类监督员
        </div>
        <div class="act-part-number">
          5
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function offset(obj,direction){
  //将top,left首字母大写,并拼接成offsetTop,offsetLeft
  var offsetDir = 'offset'+ direction[0].toUpperCase()+direction.substring(1);

  var realNum = obj[offsetDir];
  var positionParent = obj.offsetParent;  //获取上一级定位元素对象

  while(positionParent != null){
    realNum += positionParent[offsetDir];
    positionParent = positionParent.offsetParent;
  }
  return realNum;
}
export default {
  name: "MeBottom",
  data(){
    return{
      isFixed: false,
      offsetTop: 0
    }
  },
  watch:{

  },
  mounted() {
    window.addEventListener('scroll', this.initHeight);
    this.$nextTick(() => {
      //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
      this.offsetTop = offset(document.querySelector('#boxFixed'),'top');
      // console.log(document.querySelector('#boxFixed').offsetParent.offsetTop);
    })
  },
  methods: {
    Gotoperson() {
      this.$router.push('/personalInformation')
    },
    Gotomessage() {
      this.$router.push('/message')
    },
    Gotoshop() {
      this.$router.push('/score')
    },
    test() {
      this.$router.push('/test')
    },
    goAnchor(e) {
      document.getElementById(e).scrollIntoView({
        behavior: "smooth",  // 平滑过渡
        block: "start"  // 上边框与视窗顶部平齐。默认值
      });
    },
    initHeight() {
      // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //如果被卷曲的高度大于吸顶元素到顶端位置 的距离
      this.isFixed = scrollTop > this.offsetTop ? true : false;
      console.log("offset:",this.offsetTop);
      console.log(scrollTop);
    },

  },
  destroyed() {
    window.removeEventListener('scroll', this.handle)
  }
}
</script>

<style scoped>
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
.fixed{
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
  height: 60%;
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
.is_fixed{
  position: fixed;
  top: 0;
  z-index: 999;
  margin:0;
  left: 0%;
  width:100%;
  height:7%;
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

</style>
