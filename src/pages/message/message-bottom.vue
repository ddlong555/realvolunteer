<template>
  <div class="bottom">
    <div class="bottom-team">
      <div class="bottom-team-title">官方通知</div>
      <message-single></message-single>
      <message-single></message-single>
      <message-single></message-single>
    </div>
    <div class="bottom-team">
      <div class="bottom-team">
        <div class="bottom-team-title">私人会话</div>
        <message-single></message-single>
        <message-single></message-single>
        <message-single></message-single>
        <message-single></message-single>
        <message-single></message-single>
        <message-single></message-single>
        <message-single></message-single>
      </div>
    </div>
  </div>
</template>

<script>
import MessageSingle from "@/pages/message/message-single";

export default {
  name: "message-bottom",
  components: {MessageSingle},
}
</script>

<style scoped>
.bottom {
  position: absolute;
  width: 100%;
  height: 93%;
  top: 7%;
  overflow: scroll;
  overflow-x:hidden ;
}

.bottom-team {
  width: 100%;
  position: relative;
  height: auto;
  min-height: 50px;
}

.bottom-team-title {
  font-size: 12px;
  line-height: 25px;
  padding-left: 10px;
  color: #707070;
  height: 25px;
  width: 100%;
}
</style>
