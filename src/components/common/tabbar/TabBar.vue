<template>
  <div class="tar-bar" v-show="hideshow">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      docmHeight: document.documentElement.clientHeight ||document.body.clientHeight,
      showHeight: document.documentElement.clientHeight ||document.body.clientHeight,
      hideshow:true //显示或者隐藏footer
    }
  },
  watch: {
    //监听显示高度
    showHeight:function() {
      if(this.docmHeight > this.showHeight){
        //隐藏
        this.hideshow=false
      }else{
        //显示
        this.hideshow=true
      }
    }
  },
  mounted() {
    //监听事件
    window.onresize = ()=>{
      return(()=>{
        this.showHeight = document.documentElement.clientHeight || document.body.clientHeight;
      })()
    }
  },
}
</script>

<style scoped>
.tar-bar {
  height:8%;
  display: flex;
  background-color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -8px 10px rgba(20, 20, 20, .1);
  z-index: 1;
}


</style>

