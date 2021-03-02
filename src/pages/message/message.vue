<template>
  <div class="message">
    <message-top></message-top>
    <message-bottom></message-bottom>
  </div>
</template>

<script>
import MessageBottom from "@/pages/message/message-bottom";
import MessageTop from "@/pages/message/message-top";

export default {
  name: "message",
  components: {MessageBottom, MessageTop}
}
</script>

<style scoped>
.message {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
