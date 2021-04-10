<template>
  <div class="tar-bar-item" @click="changeisactive">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String
  },
  data() {
    return {


    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!=-1
    },

  },
  methods: {
    changeisactive() {
      this.isactive = !this.isactive;
      this.$router.replace(this.path)
      // console.log(this.path);
    }
  }
}
</script>

<style scoped>
.tar-bar-item {
  flex: 1;
  z-index: 1;
  text-align: center;
  height: 49px; /*移动端开发tab高度*/
  font-size: 14px;
}

.tar-bar-item img {
  margin-top: 3px;
  vertical-align: middle;
  height: 24px;
  width: 24px;
}
.active{
  color:#fa8950;
}
</style>
