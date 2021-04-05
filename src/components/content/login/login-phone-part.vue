<template>
  <div class="phone-part">
    <div class="sentence">
      未注册用户的手机号验证后自动创建账号
    </div>
    <div class="button-above" v-show="disabled">
    </div>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" class="button" @click="messageget">
      获取短信验证码
    </van-button>
    <div class="function">
      <router-link :to="{name: 'passwordlogin'}" tag="div" class="passwordlogin">
        密码登录
      </router-link>
      <div class="passwordfind" @click="passfind">
        找回密码
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "login-phone-part",
  data() {
    return {
      response: {},
      success: 1,
    }
  },
  computed: {
    phonenonews() {
      return this.phone.replaceAll(" ", "")
    }
  },
  props: ['disabled', 'phone'],
  methods: {
    messageget() {
      this.$axios.get('/api/volunteer/user/getVerifyCode', {
        params: {
          "tel": this.phonenonews
        }
      })
          .then((res) => {
            if (res != null)
              this.response = res;
            console.log(this.response);
          })
          .catch((error) => {
            console.log(error);
          });
      this.$router.push({
            path: '/loginmessage',
            query:
                {
                  phone: this.phone,
                  code: 0
                }
          },
      )
    },
    passfind() {
      this.$router.push({
        path: '/passwordfind',
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.phone-part
  position absolute
  width 100%
  height 80%

  .sentence
    position absolute
    top 14%
    left 9%
    font-size 12px
    color #989898
    letter-spacing 1px
    transform-origin: 0 0;
    transform: scale(0.95, 0.95)

  .button
    position relative
    top 22%
    left 8%
    width 82%
    height 8%
    font-size 14px
    letter-spacing 1px
    font-weight bold

  .button-above
    position absolute
    top 22%
    left 8%
    width 82%
    height 8%
    background-color white
    opacity 0.8
    z-index 1

  .function
    position absolute
    display flex
    top 33%
    left 8%
    width 82%
    height 4%
    font-size 12px
    color #686868

    .passwordfind
      position relative
      left 68%
      transform-origin: 0 0;
      transform: scale(0.95, 0.95)

    .passwordlogin
      position relative
      transform-origin: 0 0;
      transform: scale(0.95, 0.95)

</style>
