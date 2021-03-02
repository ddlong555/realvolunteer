<template>
  <div class="video" :style="{ height: bodyHeight + 'px' }">
    <videotop></videotop>
    <videomain></videomain>
  </div>
</template>

<script>
import videomain from "@/pages/myvideo/content/videomain"
import videotop from "@/pages/myvideo/content/videotop"

export default {
  name: "myvideo",
  components: {
    videomain,
    videotop
  },
  methods:{

  },
  data() {
    return{
      bodyHeight:0
    }
  },
  created(){
    this.bodyHeight=document.documentElement.clientHeight
  }
}
</script>

<style scoped>
.video{
  position: absolute;
  width: 100%;
}
</style>
