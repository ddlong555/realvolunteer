<template>
  <div class="main"  :style="{ height: bodyHeight + 'px' }">
    <logintop></logintop>
    <loginbottom>
      <div>
        欢迎登录这个APP
      </div>
    </loginbottom>
  </div>
</template>

<script>
import Logintop from "@/pages/login/logintop";
import Loginbottom from "@/pages/login/loginbottom";

export default {
  name: "login.vue",
  data() {
    return {
      bodyHeight: 0
    }
  },
  components: {Loginbottom, Logintop},

  mounted() {
    this.bodyHeight = document.documentElement.clientHeight
  }
}
</script>

<style scoped>
.main {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;

}
</style>
