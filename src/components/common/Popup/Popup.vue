<template>
  <div class="popup" v-if="isShow">
    <div class="popup_cover" @click="CoverClose" v-if="isShow" :style="{height:bodyHeight+'px'}">
    </div>
    <div class="popup_content" :style="{top:topDistance+'%',width:widNum+'%',left:leftSite+'%'}"  v-if="isShow">
      <slot name="header"></slot>
      <div class="popup_main" :style="{paddingTop:pdt+'px',paddingBottom:pdb+'px'}">
        <!--弹窗的内容-->
        <slot name="main">弹窗内容</slot>
      </div>
      <!--弹窗关闭按钮-->
<!--      <div  class="popup_close" @click="closeMyself">-->
<!--        <div class="close_img back"></div>-->
<!--      </div>-->
      <!--小三角-->
      <div class="triangle" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  data(){
    return{
    }
  },
  props: {
    isShow: {
      //弹窗组件是否显示 默认不显示
      type: Boolean,
      default: false,
      required:true, //必须
    },
    //下面这些属性会绑定到div上面 详情参照上面的html结构
    // 如： :style="{top:topDistance+'%',width:widNum+'%'}"
    bodyHeight:{
      //内容宽度
      type: Number,
      default:640,
    },
    widNum:{
      //内容宽度
      type: Number,
      default:86.5
    },
    leftSite:{
      // 左定位
      type: Number,
      default:6.5
    },
    topDistance: {
      //top上边距
      type: Number,
      default:35
    },
    pdt:{
      //上padding
      type: Number,
      default:8
    },
    pdb:{
      //下padding
      type: Number,
      default:15
    }
  },
  methods:{
    CoverClose(){
      this.$emit("ListenChild")
      console.log("b")
    }
  }
}
</script>

<style scoped>

.popup {
  position: fixed;
  color: #2e2c2d;
  font-size: 16px;
  width:100%;
  top:0;
  left:0;
  z-index: 100;
}

.popup_cover{
  background:rgba(0,0,0,0.1);
  position: fixed;
  z-index: 200;
  top: 0;
  width: 100%;
}

.popup_content{
  position: fixed;
  background-color: white;
  border-radius: 8px;
  top:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 300;
}
.triangle{
  position: fixed;
  z-index: 300;
  left:88%;
  top:6%;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 20px solid white;
}
</style>