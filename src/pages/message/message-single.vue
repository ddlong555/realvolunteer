<template>
  <div class="single">
    <div class="single-img" :style="{backgroundImage:'url('+head+')'}">
    </div>
    <div class=" single-font">
      <div class="single-font-title">
        {{title}}
      </div>
      <div class="single-font-content">
        {{content}}
      </div>
    </div>
    <div class="single-right">
      <div class="single-right-time">
<!--        2020-03-17-->2017-01-01
      </div>
      <div class="single-right-number">
        <div class="single-right-number-red">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "message-single",
  data(){
    return {
      head:require("../../assets/image/test/b.jpg"),
      title:"招聘信息",
      content:'成功录取',
    }
  }
}
</script>

<style scoped>
.single {
  position: relative;
  height: 52px;
  width: 100%;
  margin-bottom: 1px;
  background-color: white;
  display: flex;
}

.single-img {
  margin-top: 9px;
  margin-left: 9px;
  height: 30px;
  width: 30px;
  border-radius: 30px;
  border: 1px solid #ccc;
  background-size: 100% 100%;
}

.single-font {
  position: relative;
  width:70%;
  height: 52px;
  left: 3%;
}

.single-font-content {
  width:95%;
  height: 20px;
  font-size: 12px;
  color: #ccc;
  overflow: hidden;
  margin-top: 5px;
  /*display: -webkit-box;*/
  /*-webkit-box-orient: vertical;*/
  /*-webkit-line-clamp: 1;*/
}

.single-font-title {
  height:20px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 5px;
}
.single-right{
  position: relative;
  height:52px;
  width:20%;
  white-space: nowrap;
}
.single-right-time{
  font-size: 12px;
  color: #707070;
  margin-top: 7px;
  margin-right: 7px;
  float: right;
}
</style>
