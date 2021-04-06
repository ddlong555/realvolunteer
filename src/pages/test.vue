<template>
  <div class="box" @click="initHeight">
    456466546
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
  mounted(){
    console.log(this.$store.getters.getToken);
    console.log(this.$store.getters.getUser);
    console.log(this.$store.getters.getLogin);

  },
  methods: {
    //这里通过isFixed去控制你的吸顶效果得实现
    initHeight() {
      console.log(this.$store.getters.getToken);
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