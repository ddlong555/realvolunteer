<template>
  <div class="bottommain">
    <div class="title">
      <slot></slot>
    </div>
    <div class="phone">
      <!--      <div class="label">-->
      <!--        手机号-->
      <!--      </div>-->
      <div class="phoneinput">
        <input  placeholder="请输入手机号" class="input"
                v-model="mobile" type="tel" ref="mobile" maxlength="13" @keyup="inputMobile" @paste="inputMobile"/>
        <img src="../../assets/image/me/login/closeinput.svg" alt="" v-show="inputclose" class="close" @click="inputclear">
      </div>
      <div class="thinkbox">
        <!-- input下的那条线-->
      </div>
    </div>
    <keep-alive>
      <router-view :disabled="disabled" :phone="mobile"></router-view>
    </keep-alive>

    <div class="file">
      登录即代表您同意《用户协议》和《隐私政策》
    </div>
  </div>
</template>

<script>

export default {
  name: "loginbottom",
  components: {
  },
  data () {
    return {
      mobile: this.$route.query.phone,
      inputclose:false,
      disabled:true
    }
  },
  watch:{

    mobile() {
      if (this.mobile.length === 13) {
        this.disabled = false
      } else {
        this.disabled = true
      }
      if(this.mobile.length === 0){
        this.inputclose=false
      }else{
        this.inputclose=true
      }
    }
  },
  methods: {
    inputclear(){
      this.mobile=""
      this.inputclose=false
      this.disabled=true
      this.$emit('listenToChildEvent',this.disabled);
    },
    inputMobile (e) {
      this.$emit('listenToChildEvent',this.disabled);
      this.formatMobile(e)
      this.mobile = this.$refs.mobile.value
      this.$emit('listenToChildEvent2',this.mobile);
    },
    formatMobile (e) {
      let val = this.$refs.mobile.value // 不可直接用this.mobile，第一方便提取该方法降低代码耦合度，第二直接用this.mobile,在输入汉字时按下shift按键会导致无法再输入和删除内容
      let selStart = this.$refs.mobile.selectionStart // 选中区域左边界位置
      let mobileLen = val.length
      let value = this.getValue(e, val).substr(0, 11) // 获取输入/粘贴内容,并截取前11位
      let len = value.length
      if (len > 3 && len < 8) {
        value = value.replace(/^(\d{3})/g, '$1 ')
      } else if (len >= 8) {
        value = value.replace(/^(\d{3})(\d{4})/g, '$1 $2 ')
      }
      this.$refs.mobile.value = value
      if (selStart !== mobileLen) {
        if (selStart === 3) {
          selStart++
        }
        // 设置光标位置
        this.$refs.mobile.selectionStart = this.$refs.mobile.selectionEnd = selStart
      }
    },
    getValue(e, val) {
      let value = ''
      if (e.type === 'keyup') {
        value = val.replace(/\D/g, '')
      } else if (e.type === 'paste') {
        // window.clipboardData：IE浏览器获取剪贴板数据对象
        // event.clipboardData：Chrome, Firefox, Safari获取剪贴板数据对象
        let clipboardData = event.clipboardData || window.clipboardData;
        value = clipboardData.getData('Text'); // 获取剪贴板text格式的数据
        value = value.replace(/\D/g, '')
      }
      return value
    }
  }
}
</script>

<style lang="stylus" scoped>
.bottommain
  position absolute
  top 7%
  width 100%
  height 93%

  .title
    position relative
    left: 9%
    top 4%
    width 80%
    height 10%

  .title div
    position absolute
    top 15%;
    width: 100%;
    font-size 22px;
    letter-spacing 1px

  .phone
    position absolute
    top 14%
    left 9%
    width 91%
    height 7%

    .phoneinput
      position relative
      width 82%
      height 92%
      .close
        position absolute
        z-index 1
        left 90%
        top 4%
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

    .thinkbox
      position: relative;
      width: 410%;
      height: 20%;
      border-top: 1px solid black;
      transform-origin: 0 0;
      transform: scale(0.2, 0.2)
      z-index 1

  .file
    position absolute
    top 95%
    text-align center
    width 111%
    height 5%
    font-size 12px
    color #989898
    transform-origin: 0 0;
    transform: scale(0.90, 0.90)
</style>
