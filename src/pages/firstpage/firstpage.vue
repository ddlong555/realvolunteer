<template>
  <div class="fpage" :style="{ height: bodyHeight + 'px' }">
    <top></top>
    <act></act>
  </div>
</template>

<script>
import top from "@/pages/firstpage/content/FpageTop";
import act from "@/pages/firstpage/content/FpageActivity";

export default {
  name: "firstpage",
  components: {
    act,
    top
  },
  data() {
    return{
      bodyHeight:0
    }
  },
  mounted(){
    this.bodyHeight=document.documentElement.clientHeight
  }
}
</script>

<style scoped>
.fpage{
  position: absolute;
  width:100%;
}
</style>
