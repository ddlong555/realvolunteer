<template>
  <div class="teamdis">
    <top2></top2>
    <div class="overflow">
      <div class="bg-pic">
        <img src="../../assets/image/teamdis/logo.svg">
      </div>
      <information></information>
      <volunteer></volunteer>
    </div>
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
    },
  }

</script>

<style scoped>
.teamdis{
  position: absolute;
  height: 100%;
  width: 100%;
}
.overflow{
  position: relative;
  height: 90%;
  width: 100%;
  overflow: scroll;
}
.bg-pic{
  position:relative;
  top: 0%;
  left: 25%;
  height: 10%;
  width: 50%;
  z-index:0;
}
.bg-pic img{
  height:100%;
  width:100%;
}
</style>
