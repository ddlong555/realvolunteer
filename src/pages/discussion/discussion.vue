<template>
  <div class="dis">
    <top>
    </top>
    <dmain></dmain>
  </div>

</template>

<script>
import top from "./top"
import dmain from "./dis-main"

export default {
  name: "discussion",
  components: {
    top,
    dmain
  }
}
</script>

<style scoped>
.dis {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
