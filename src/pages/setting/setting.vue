<template>
  <div class="pages">
    <top2 title=""></top2>
    <div style="height: 50px"></div>
    <van-cell-group>
      <van-cell title="手机号码" :value="this.$store.getters.getUser.tel" />
      <van-cell title="忘记密码" value="" is-link @click="forgetpass"/>
      <van-cell title="账号注销" value="" is-link/>
    </van-cell-group>
    <van-cell-group class="item">
      <van-cell title="关于我们" value="" is-link/>
      <van-cell title="清除缓存" value="4.90M" is-link/>
      <van-cell title="账号注销" value="" is-link/>
      <van-cell title="隐私条款" value="" is-link/>
      <van-cell title="注册协议" value="" is-link/>
    </van-cell-group>
    <div class="logOut" @click="outlogin">
      退出登录
    </div>

  </div>
</template>
<script>
import top2 from "@/pages/upload/content/top2";

export default {
  components: {
    top2
  },
  name: "setting",
  data() {
    return {


    };
  },
  mounted() {
    document.title = '设置'
  },
  methods: {
    outlogin(){
      this.$store.commit('saveLogin',false)
      this.$router.push("/firstpage")
    },
    forgetpass(){
      this.$router.push("/passwordfind")
    }
  },

};
</script>

<style lang="scss" scoped>
.item{
  margin-top: 10px;
}
.logOut{
  background: #fff;
  padding: 12px 0;
  text-align: center;
  margin-top: 14px;
}
/deep/ .van-cell{
  font-size: 15px;
}
</style>
