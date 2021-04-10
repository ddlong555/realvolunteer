<template>
  <div class="passwordfind" :style="{ height: bodyHeight + 'px' }">
    <div class="top">
      <div class="top-back" @click="back">
        <img src="../../assets/image/me/login/close.svg" alt="">
      </div>
      <div class="top-add">
        帮助
      </div>
    </div>
    <loginbottom v-on:listenToChildEvent = 'showdisabled' v-on:listenToChildEvent2 = 'showphone'>
      <div>
      忘记密码？
      </div>
    </loginbottom>
    <div class="button-above" v-show="disabled">
    </div>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" class="button" @click="messageget">
      获取短信验证码
    </van-button>
  </div>
</template>

<script>
import loginbottom from "@/pages/login/loginbottom"
export default {
  name: "passwordfind",
  components:{
    loginbottom,
  },
  data () {
    return {
      disabled:true,
      bodyHeight:0,
      phone:""
    }
  },
  methods:{
    back(){
      this.$router.back();
    },
    showdisabled(disabled){
      this.disabled=disabled;
    },
    showphone(mobile){
      this.phone=mobile.replaceAll(" ","");
    },
    messageget(){
        this.$axios.get('/api/volunteer/user/getVerifyCode', {
          params: {
            "tel": this.phone
          }
        })
            .then((res) => {
              if (res != null){
                if(res.data.success===true){
                  this.$router.push({
                    path: '/loginmessage',
                    query: {
                      phone: this.phone,
                      code: 1            //1为找回密码，0为登录
                    }
                  });
                }
                else{
                  alert("发送次数太多，请十分钟后再发送")
                }
              }
              console.log(this.response);
            })
            .catch((error) => {
              console.log(error);
            });
    },
  },
  mounted() {
    this.bodyHeight = document.documentElement.clientHeight
  }
}
</script>

<style scoped lang="stylus">
.passwordfind{
  position: absolute;
  height:100%;
  width:100%
  background-color: #ffffff;

}
.top {
  position: absolute;
  height: 7%;
  width: 100%;
}

.top-back {
  position: absolute;
  text-align: center;
  padding-top: 5px;
  padding-left:5px;
  width: 30px;
  height: 25px;
  top: 17%;

  z-index: 1;
}

.top-back img {

  height: 22px;
  width: 22px;
}

.top-add {
  position: absolute;
  height: 70%;
  width: 15%;
  left: 85%;
  top: 30%;
  text-align: center;
  font-size: 12px;
}
.button {
  position relative
  top 30%
  left 8%
  width 82%
  height 6%
  font-size 14px
  letter-spacing 1px
  font-weight bold
}
.button-above {
  position absolute
  top 30%
  left 8%
  width 82%
  height 6%
  background-color white
  opacity 0.8
  z-index 1
}
</style>
