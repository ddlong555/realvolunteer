<template>
  <div class="newpassword">
    <logintop></logintop>
    <div class="title">
      <div>修改密码</div>
    </div>
    <div class="codeChange">
      <div class="phoneinput">
        <input :type="pwdType1" placeholder="请输入修改后的密码" class="input" maxlength="18"  v-model="password1"/>
        <img src="../../assets/image/me/login/closeinput.svg" alt="" v-show="inputClose1" class="close2" @click="inputClear1">
        <img :src="eye1" alt="" class="close1" @click="changeType1">
      </div>
      <div class="thinkbox">
        <!--        input下的那条线-->
      </div>
    </div>
    <div class="codeAgain">
      <div class="phoneinput">
        <input :type="pwdType2" placeholder="请再次输入密码" class="input" maxlength="18"  v-model="password2"/>
        <img src="../../assets/image/me/login/closeinput.svg" alt="" v-show="inputClose2" class="close2" @click="inputClear2">
        <img :src="eye2" alt="" class="close1" @click="changeType2">
      </div>
      <div class="thinkbox">
        <!--        input下的那条线-->
      </div>
    </div>
    <div class="button-above" v-show="doubledisabled">
    </div>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" class="button" @click="messageGet">
      修改密码
    </van-button>
  </div>
</template>

<script>
import Logintop from "@/pages/login/logintop";
import qs from 'qs'
export default {
  name: "newpassword",
  components: {Logintop},
  data() {
    return {
      pwdType1: 'password',
      pwdType2: 'password',
      passDisabled1: false,
      passDisabled2: false,
      eye1: require("../../assets/image/me/login/eyeclose.svg"),
      eye2: require("../../assets/image/me/login/eyeclose.svg"),
      password1: '',
      password2: '',
      inputClose1:false,
      inputClose2:false,
    }
  },
  computed:{
    doubledisabled(){
      return !((this.passDisabled1 && this.passDisabled2) && (this.password1 === this.password2))
    }
  },
  watch: {
    password1() {
      console.log(this.passDisabled1)
      if (this.password1.length <= 8 || this.password1.length >=20) {
        this.passDisabled1 = false
      } else {
        this.passDisabled1 = true
      }
      if(this.password1.length === 0){
        this.inputClose1=false
      }else{
        this.inputClose1=true
      }
    },
    password2() {
      console.log(this.passDisabled2)
      if (this.password2.length <= 8 || this.password2.length >=20) {
        this.passDisabled2 = false
      } else {
        this.passDisabled2 = true
      }
      if(this.password2.length === 0){
        this.inputClose2=false
      }else{
        this.inputClose2=true
      }
    }
  },
  methods: {
    inputClear1(){
      this.password1=""
      this.inputClose1=false
      this.passDisabled1=false
    },
    inputClear2(){
      this.password2=""
      this.inputClose2=false
      this.passDisabled2=false
    },
    changeType1() {
      console.log(this.pwdType1);
      this.pwdType1 = this.pwdType1 === 'password' ? 'text' : 'password';
      this.eye1 = this.eye1 == require("../../assets/image/me/login/eyeopen.svg") ? require("../../assets/image/me/login/eyeclose.svg") : require("../../assets/image/me/login/eyeopen.svg");
    },
    changeType2() {
      console.log(this.pwdType2);
      this.pwdType2 = this.pwdType2 === 'password' ? 'text' : 'password';
      this.eye2 = this.eye2 == require("../../assets/image/me/login/eyeopen.svg") ? require("../../assets/image/me/login/eyeclose.svg") : require("../../assets/image/me/login/eyeopen.svg");
    },
    messageGet(){
      var that = this;
      this.$axios.post("/api/volunteer/user/updatePassword", qs.stringify({
        "tel": that.$route.query.phone,"newPassword": that.password1
      }),)
          .then(function (response) {
            if(response.data.success == true){
              that.$router.push('/firstpage')
            }
            else{
              alert("修改失败");
            }
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    },
  }
}
</script>

<style lang="stylus" scoped>
.newpassword
  position absolute
  width 100%
  height 80%

  .title
    position relative
    left: 9%
    top 13%
    width 80%
    height 10%

  .title div
    position absolute
    top 15%;
    width: 100%;
    font-size 22px;
    letter-spacing 1px

  .codeChange
    position absolute
    top 25%
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
        background #f7f7f7

    .thinkbox
      position: relative;
      width: 410%;
      height: 20%;
      border-top: 1px solid black;
      transform-origin: 0 0;
      transform: scale(0.2, 0.2)

  .codeAgain
    position absolute
    top 35%
    left 9%
    width 91%
    height 7%

    .phoneinput
      position relative
      width 82%
      height 92%
      background-color #f7f7f7

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
        background #f7f7f7

    .thinkbox
      position: relative;
      width: 410%;
      height: 20%;
      border-top: 1px solid black;
      transform-origin: 0 0;
      transform: scale(0.2, 0.2)

  .button
    position absolute
    top 45%
    left 8%
    width 82%
    height 8%
    font-size 14px
    letter-spacing 1px
    font-weight bold

  .button-above
    position absolute
    top 45%
    left 8%
    width 82%
    height 8%
    background-color white
    opacity 0.8
    z-index 1

</style>
