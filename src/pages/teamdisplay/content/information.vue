<template>
  <div class="information">
    <div class="inform">
      <ul class="inform1">
        <li>创立时间：{{ time }}<br></li>
      </ul>
      <ul class="inform2">
        <li>创立者：{{ author }}<br></li>
      </ul>
      <ul class="inform3">
        <li>地点：{{ place }}<br></li>
      </ul>
      <ul class="inform4">
        <li>宣言：<br>
          {{ declaration }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "information",
  data() {
    return {
      time: "2021年1月1日",
      author: "华东师范大学某团队",
      place: "上海普陀",
      declaration: "我志愿加入中国共产党，拥护党的纲领，遵守党的章程，履行党员义务，执行党的决定，严守党的纪律，保守党的秘密，对党忠诚，积极工作，为共产主义奋斗终身，随时准备为党和人民牺牲一切，永不叛党。",
    }
  },
}
</script>

<style scoped>
.information {
  position: relative;
  left: 10%;
  height: auto;
  width: 80%;
}

.inform {
  position: relative;
  height:auto;
  top: 10%;
  bottom: 46%;
  left: 1%;
  right: 1%;
  font-family: STSong;
  font-size: 20px;
  color: black;
}

.inform1 {
  position: relative;
  top: 23%;
  left: 1%;
  right: 1%;
  bottom: 72%;
  border-style: solid;
  border-color: darkgray;
  border-left: 0px;
  border-right: 0px;
  margin: 0.05px;
}

.inform1 li {
  list-style: url("../../../assets/image/teamdis/time.svg");
  border-style: none;
  border-right: 0px;
  border-top: 0px;
  border-bottom: 0px;
}

.inform2 {
  position: relative;
  top: 27.5%;
  left: 1%;
  right: 1%;
  bottom: 68%;
  border-style: solid;
  border-color: darkgray;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  margin: 0.05px;
}

.inform2 li {
  list-style: url("../../../assets/image/teamdis/user.svg");
  border-style: none;
  border-right: 0px;
  border-top: 0px;
  border-bottom: 0px;
}

.inform3 {
  position: relative;
  top: 32%;
  left: 1%;
  right: 1%;
  bottom: 63%;
  border-style: solid;
  border-color: darkgray;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  margin: 0.05px;
}

.inform3 li {
  list-style: url("../../../assets/image/teamdis/map.svg");
  border-style: none;
  border-right: 0px;
  border-top: 0px;
  border-bottom: 0px;
}

.inform4 {
  position: relative;
  top: 38%;
  bottom: 45%;
  left: 1%;
  right: 1%;
  border-style: solid;
  border-color: darkgray;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  margin: 0.1px;
}

.inform4 li {
  display: flex;
  list-style: url("../../../assets/image/teamdis/declare.svg");
  border-style: none;
  border-right: 0px;
  border-top: 0px;
  border-bottom: 0px;
}
</style>
