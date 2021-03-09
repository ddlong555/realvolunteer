<template>
  <div class="me-bottom">
    <div class="widget">
      <div class="widget-part" @click="Gotoperson">
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
    <div class="act-nav">
      <div class="router">
        <div>已关注</div>
        <div>已报名</div>
        <div>已发布</div>
        <div>已参加</div>
      </div>
    </div>
    <div class="act">
      <div class="act-part">
        <img src="../../../assets/image/me/sun.svg" alt=""/>
        <div class="act-part-title">
          华师大垃圾分类监督员
        </div>
        <div class="act-part-number">
          5
        </div>
      </div>
      <div class="act-part">
        <img src="../../../assets/image/me/sun.svg" alt=""/>
        <div class="act-part-title">
          华师大垃圾分类监督员
        </div>
        <div class="act-part-number">
          5
        </div>
      </div>
      <div class="act-part">
        <img src="../../../assets/image/me/sun.svg" alt=""/>
        <div class="act-part-title">
          华师大垃圾分类监督员
        </div>
        <div class="act-part-number">
          5
        </div>
      </div>
      <div class="act-part">
        <img src="../../../assets/image/me/sun.svg" alt=""/>
        <div class="act-part-title">
          华师大垃圾分类监督员
        </div>
        <div class="act-part-number">
          5
        </div>
      </div>
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
export default {
  name: "MeBottom",
  methods:{
    Gotoperson(){
      this.$router.push('/personalInformation')
    },
    Gotomessage(){
      this.$router.push('/message')
    },
    Gotoshop(){
      this.$router.push('/score')
    },
    test(){
      this.$router.push('/test')
    }

  }
}
</script>

<style scoped>
.me-bottom {
  width: 100%;
  position: absolute;
  height:68%;
}

.widget {
  display: flex;
  width: 96%;
  height: 80px;
  position: absolute;
  top: 2%;
  left: 2%;
  background-color: white;
  border-radius: 20px;
}

.act-nav {
  width: 96%;
  position: absolute;
  height: auto;
  top: 27%;
  left: 2%;
}

.router {
  width: 96%;
  height: 35px;
  display: flex;
  position: relative;
  top: 5px;
  left: 2%;
}

.router div {
  position: relative;
  left: 15px;
  margin-right: 15px;
  height: 30px;
  width: 30%;
}

.act {
  width: 96%;
  height: 98%;
  position: absolute;
  top: 32%;
  left: 2%;
}
.act-part {
  display: flex;
  width: 96%;
  height: 70px;
  position: relative;
  left: 2%;
  top: 10px;
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
</style>
