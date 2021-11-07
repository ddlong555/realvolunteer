<template>
  <div class="team">
    <top5></top5>
    <contents></contents>
  </div>
</template>

<script>
import top5 from "./content/top5"
import contents from "./content/contents"
export default {
  name: "team",
  components:{
    top5,
    contents,
  }
}
</script>

<style scoped>
.team{
  height:100%;
  width:100%;
  background-color: #f7f7f7;
}
</style>
