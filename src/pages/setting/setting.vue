<template>
  <div class="pages">
    <van-cell-group>
      <van-cell title="手机号码" value="158888888" />
      <van-cell title="密码管理" value="" is-link/>
      <van-cell title="账号注销" value="" is-link/>
    </van-cell-group>
    <van-cell-group class="item">
      <van-cell title="关于我们" value="" is-link/>
      <van-cell title="清除缓存" value="4.90M" is-link/>
      <van-cell title="账号注销" value="" is-link/>
      <van-cell title="隐私条款" value="" is-link/>
      <van-cell title="注册协议" value="" is-link/>
    </van-cell-group>
    <div class="logOut">
      退出登录
    </div>

  </div>
</template>

<script>
export default {
  name: "setting",
  data() {
    return {


    };
  },
  mounted() {
    document.title = '设置'
  },
  methods: {
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
