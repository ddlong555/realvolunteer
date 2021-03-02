<template>
  <div class="teamdis">
      <top2></top2>
    <div class="bg-pic">
      <img src="../../assets/image/teamdis/logo.svg">
    </div>
    <information></information>
    <volunteer></volunteer>
  </div>
</template>

<script>
import top2 from "./content/top2"
import information from "./content/information"
import volunteer from "./content/volunteer"

export default {
    name: "teamdis",
    components: {
      top2,
      information,
      volunteer,
    }
  }

</script>

<style scoped>
.bg-pic{
  position:absolute;
  top:10%;
}
.bg-pic img{
  height:85px;
  width:600px;
}
</style>
