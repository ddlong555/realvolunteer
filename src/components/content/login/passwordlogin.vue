<template>
  <div class="passwordlogin">
    <div class="phone">
      <div class="phoneinput">
        <input :type="pwdType" placeholder="请输入密码" class="input" maxlength="18" v-model="password" />
        <img src="../../../assets/image/me/login/closeinput.svg" alt="" v-show="inputclose" class="close2"
             @click="inputclear">
        <img :src="eye" alt="" class="close1" @click="changeType">
      </div>
      <div class="thinkbox">
        <!--        input下的那条线-->
      </div>
    </div>
    <div class="button-above" v-show="doubledisabled">
    </div>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" class="button" @click="passlogin">
      登录
    </van-button>
    <div class="function">
      <router-link :to="{name: 'login-phone-part'}" tag="div" class="passwordlogin">
        短信登录
      </router-link>
      <div class="passwordfind" @click="passfind">
        找回密码
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs"
export default {
  name: "passwordlogin",
  data() {
    return {
      //pwdType为input的type值，passdisabled为密码是否填入的bool值，eye为密码遮盖图片url，
      // password为密码值，inputclose为控制input的叉号是否展示bool值
      pwdType: 'password',
      passdisabled: false,
      eye: require("../../../assets/image/me/login/eyeclose.svg"),
      password: this.$route.query.password,
      inputclose: false,
    }
  },
  computed: {
    doubledisabled() {
      return !(this.passdisabled && (!this.disabled))
    }
  },
  //disabled表示是否账号输入符合规定
  props: ['disabled','phone'],
  watch: {
    password() {

      if (this.password.length === 0) {
        this.passdisabled = false
      } else {
        this.passdisabled = true
      }
      if (this.password.length === 0) {
        this.inputclose = false
      } else {
        this.inputclose = true
      }
    }
  },
  methods: {
    inputclear() {
      this.password = ""
      this.inputclose = false
      this.passdisabled = false
    },
    changeType() {
      console.log(this.pwdType);
      this.pwdType = this.pwdType === 'password' ? 'text' : 'password';
      this.eye = this.eye == require("../../../assets/image/me/login/eyeopen.svg") ? require("../../../assets/image/me/login/eyeclose.svg") : require("../../../assets/image/me/login/eyeopen.svg");
    },
    passfind() {
      this.$router.push('/passwordfind')
    },
    passlogin(){
      var that=this;
      this.$axios.post("/api/volunteer/user/signIn", qs.stringify({
        "tel": this.phone.replaceAll(" ",""),
        "password":this.password,
      }),)
          .then(function (response) {
            if(response.data.success===true){
              that.$store.commit('saveToken',response.headers.token)
              that.$store.commit('saveUser',response.data.result)
              that.$store.commit('saveLogin',true)
              // that.$store.commit('saveSessionId', response.headers.sessionId)
              that.$router.push({
                path: '/firstpage',
              })
            }
            else
              alert("密码错误")
            console.log(response)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  }
}
</script>

<style lang="stylus" scoped>
.passwordlogin
  position absolute
  width 100%
  height 80%

  .phone
    position absolute
    top 15%
    left 9%
    width 91%
    height 7%

    .phoneinput
      position relative
      width 82%
      height 92%

      .close1
        position absolute
        z-index 2
        left 93%
        top 20%
        height 15px
        width 15px

      .close2
        position absolute
        z-index 1
        left 75%
        top -10%
        height 30px
        width 30px

      .input
        position relative
        z-index 1
        width 80%
        height 90%
        border none
        outline: none
        font-size 18px

    .thinkbox
      position: relative;
      width: 410%;
      height: 20%;
      border-top: 1px solid black;
      transform-origin: 0 0;
      transform: scale(0.2, 0.2)
      z-index: 1

  .button
    position relative
    top 25%
    left 8%
    width 82%
    height 8%
    font-size 14px
    letter-spacing 1px
    font-weight bold

  .button-above
    position absolute
    top 25%
    left 8%
    width 82%
    height 8%
    background-color white
    opacity 0.8
    z-index 1

  .function
    position absolute
    display flex
    top 35%
    left 8%
    width 82%
    height 4%
    font-size 12px
    color #686868

    .passwordfind
      position relative
      white-space: nowrap;
      transform-origin: 0 0;
      transform: scale(0.95, 0.95)

    .passwordlogin
      position relative
      white-space: nowrap;
      transform-origin: 0 0;
      transform: scale(0.95, 0.95)
</style>
