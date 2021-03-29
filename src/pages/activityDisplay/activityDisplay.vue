<template>
  <div class="activityDisplay">
    <top6></top6>
    <information></information>
  </div>
</template>

<script>
import top6 from './content/top6'
import information from './content/information'
export default {
  name: "activityDisplay",
  components:{
    top6,
    information
  }
}
</script>

<style scoped>

</style>