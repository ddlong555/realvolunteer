<template>
  <div class="me">
    <div class="fixed"></div>
    <div class="me-top">
      <name></name>
    </div>
    <div class="main-bottom">
      <div class="logo">
        <div class="logo-img" :style="{backgroundImage:'url('+headPic+')'}">
          <!--            <img class="ad-img" src="../../assets/image/me/boy.svg" alt=""/>-->
        </div>
        <div class="click-logo" v-show="!is_login" @click="gotologin">
          <div class="click-logo-title">点击登录</div>
        </div>
        <div v-show="is_login" class="click-logo">
          <div class="click-logo-title">
            {{ user.userName }}
          </div>
        </div>
        <div class="toy">
          <img :src="toy.boy" alt=""/>
        </div>
        <advertisement :src="this.src" class="ad">
        </advertisement>
      </div>

      <me-bottom></me-bottom>
    </div>
  </div>
</template>

<script>
import advertisement from "@/components/common/advertisement/advertisement";
import name from "@/pages/me/conent/name"
import MeBottom from "@/pages/me/conent/MeBottom";
export default {
  name: "me",
  components: {
    advertisement,
    name,
    MeBottom,
  },
  created() {

  },
  data() {
    return {
      src: require("../../assets/image/me/ad.jpg"),
      toy:
        {
          boy: require('../../assets/image/me/boy.svg'),
          girl: require('../../assets/image/me/girl.svg')
        },
    }
  },
  computed:{
    headPic(){
      if(this.user.headPicture==null){
        return require("../../assets/image/video/headpic.png")
      }
      else
        return this.user.headPicture
    },
    user(){
      return this.$store.getters.getUser
    },
    is_login(){
      return this.$store.getters.getLogin
    },

  },
  methods:{
    gotologin(){
      this.$router.push({
        path: '/login',
      });
    },

  },
}
</script>

<style scoped>
.fixed{
  position: fixed;
  width: 100%;
  height:100%;
  z-index: -5;
  background-color: #f7f7f7;
}
.me {
  position: relative;
  width: 100%;
  height: 91%;
  background-color: #f7f7f7;
  /*z-index: -1;*/
}

.me-top {
  width: 100%;
  height: 6%;
  background-color: white;
  margin: 0;
}
.main-bottom{
  position: absolute;
  width: 100%;
  height: 86%;
  margin: 0;
}
.ad {
  position: absolute;
  width:90%;
  height:40%;
  left: 5%;
  top:49%;
  background-size: 100% 100%;
  border-radius: 50px;
}
.logo {
  position: relative;
  background-color: white;
  width: 100%;
  height: 40%;
}

.click-logo {
  position: absolute;
  left: 25%;
  top: 8%;
  height: 60px;
  width: 150px;
}

.click-logo-title {
  position: absolute;
  left: 8%;
  height: 8%;
  font-size: 17px;
  text-align: center;
  padding-top: 20px;
}

.logo-img {
  position: absolute;
  top: 8%;
  left: 6%;
  height: 65px;
  width: 65px;
  border-radius: 65px;
  background-size: 100% 100%;
}

.toy {
  position: absolute;
  left: 70%;
  top: 25%;
}

.toy img {
  height: 50px;
  width: 50px;
}
</style>
