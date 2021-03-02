<template>
    <div class="ad" :style="{backgroundImage:'url('+src+')'}">
      <!--    <img class="ad-img" :src="this.src" alt=""/>-->
    </div>
</template>

<script>

export default {
  name: "advertisement",
  props: {
    src: String
  }
}
</script>

<style scoped>
/*.ad-div{*/
/*  background-color: #ffffff;*/
/*  width: 100%;*/
/*  height: 13%;*/
/*  position: absolute;*/
/*  top: 20%;*/

/*}*/


</style>
