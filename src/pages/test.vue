<template>
  <div class="box">
    <h4>看到你全局考虑的年轻来我带你</h4>
    <h4>看到你全局考虑的年轻来我带你</h4>
    <h4>看到你全局考虑的年轻来我带你</h4>
    <h4>看到你全局考虑的年轻来我带你</h4>
    <h4>看到你全局考虑的年轻来我带你</h4>
    <h4>看到你全局考虑的年轻来我带你</h4>
    <h4>看到你全局考虑的年轻来我带你</h4>
    <h4>看到你全局考虑的年轻来我带你</h4>
    <div class="box_fixed" id="boxFixed" :class="{'is_fixed':isFixed}">
      <div class='ddddddd'><span>一座城，一个人&nbsp;&nbsp;&nbsp;</span><span>当前城市：{{city}}</span></div>
    </div>

    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
    <h4>1</h4>
  </div>
</template>

<script>
export default {
  name: "test",
  data(){
    return{
      isFixed: false,
      offsetTop: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight);
    this.$nextTick(() => {
      //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
      this.offsetTop = document.querySelector('#boxFixed').offsetTop;
      console.log("a");
    })
  },
  methods: {
    //这里通过isFixed去控制你的吸顶效果得实现
    initHeight() {
      // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //如果被卷曲的高度大于吸顶元素到顶端位置 的距离
      this.isFixed = scrollTop > this.offsetTop ? true : false;
      console.log("a");
    }

  },
}
</script>

<style scoped>
.box_fixed {
  height: 40px;
  margin: 0 auto;
  line-height: 40px;
  background: #eee;
  width: 100%
}


.is_fixed {
  position: fixed;
  top: 0;
  z-index: 999;
}

</style>