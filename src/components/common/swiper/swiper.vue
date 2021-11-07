<template>
  <div class="outswiper">
  <van-swipe :autoplay="3000" style="z-index:2;">
    <van-swipe-item v-for="(image, index) in banners" :key="index">
      <img v-lazy="banners[index].image" />
    </van-swipe-item>
  </van-swipe>
  </div>
</template>

<script>
export default {
  name: "ContinuPlay",
  props:['banners'],         //接受父级组件传过来的banners数据
  data(){
    return{

    };
  },
  methods: {}
}
</script>


<style lang="scss" scoped>
/deep/ .van-swipe img {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 230px;
  background-color: white;
  pointer-events: none;
}
.outswiper{
  width:100%;
  height:100%;
}
</style>
