<template>
  <div class="dmain">
    <div class="dmain-single">
      <div class="dmain-single-top">
        <div class="dmain-single-top-name">
          <div class="dmain-single-top-name-head" :style="{backgroundImage:'url('+head+')'}">
          </div>
          <div class="dmain-single-top-name-id">
            <div class="dmain-single-top-name-id-font">
              {{ id }}
            </div>
            <div class="dmain-single-top-name-id-time">
              {{ time }}
            </div>
          </div>
        </div>
        <div class="dmain-single-top-passage">
          {{ passage }}
        </div>
      </div>
      <div class="dmain-single-photo">
        <div class="dmain-single-photo-single" v-for="(item,index) in img" :key="index">
          <img :src=item alt="" preview="0">
        </div>
        <div class="clear"></div>
      </div>
      <div class="comment">
         <div class="comment-single">
           <div class="comment-single-name">
<!--             {{this.$store.getters.getUser}}:-->第一个人:
           </div>
           <p class="comment-single-text">
<!--             {{this.inputvalue}}-->你是谁
           </p>
         </div>
        <div class="comment-single">
          <div class="comment-single-name">
            <!--             {{this.$store.getters.getUser}}:-->第一个人:
          </div>
          <p class="comment-single-text">
            <!--             {{this.inputvalue}}-->你是谁
          </p>
        </div>
      </div>
      <div class="dmain-single-function">
        <div class="dmain-single-function-single">
          <img src="../../assets/image/discussion/zhuanfa.svg" alt="">
          <div>{{ number }}</div>
        </div>
        <div class="dmain-single-function-single" @click="inputfoucs">
          <img src="../../assets/image/discussion/say.svg" alt="">
          <div>{{ number }}</div>
        </div>
        <div >
          <input  :class="inputshow?'showinput':'noshowinput'" ref="input" v-model="inputvalue" @blur="inputblur" />
          <p ref="text" :class="inputshow?'showp':'noshowp'" @click="GoDiscuss">发送</p>
        </div>
        <div class="dmain-single-function-single">
          <img src="../../assets/image/discussion/good.svg" alt="">
          <div>{{ number }}</div>
        </div>
      </div>

    </div>
    <div class="dmain-single">
      <div class="dmain-single-top">
        <div class="dmain-single-top-name">
          <div class="dmain-single-top-name-head" :style="{backgroundImage:'url('+head+')'}">
          </div>
          <div class="dmain-single-top-name-id">
            <div class="dmain-single-top-name-id-font">
              {{ id }}
            </div>
            <div class="dmain-single-top-name-id-time">
              {{ time }}
            </div>
          </div>
        </div>
        <div class="dmain-single-top-passage">
          {{ passage }}
        </div>
      </div>
      <div class="dmain-single-photo">
        <div class="dmain-single-photo-single" v-for="(item,index) in img" :key="index">
          <img :src=item alt="" preview="1">
        </div>
      </div>
      <div class="dmain-single-function">
        <div class="dmain-single-function-single">
          <img src="../../assets/image/discussion/zhuanfa.svg" alt="" >
          <div>{{ number }}</div>
        </div>
        <div class="dmain-single-function-single">
          <img src="../../assets/image/discussion/say.svg" alt="">
          <div>{{ number }}</div>
        </div>
        <div class="dmain-single-function-single">
          <img src="../../assets/image/discussion/good.svg" alt="">
          <div>{{ number }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dmain",
  data() {
    return {
      passage: "第一条规定是这样的，那到底是怎么样的呢，是这样的，不是那样的，一定要这样",
      img: [require("../../assets/image/test/ad.jpg"), require("../../assets/image/test/d.jpg"), require("../../assets/image/test/ad.jpg"), require("../../assets/image/test/d.jpg"), require("../../assets/image/test/ad.jpg"), require("../../assets/image/test/d.jpg"), require("../../assets/image/test/ad.jpg"), require("../../assets/image/test/d.jpg")],
      id: "张文瀚",
      time: "3分钟前",
      head: require("../../assets/image/me/boy.svg"),
      number: 55,
      inputvalue:"",
      inputshow:false
    }
  },
  methods:{
    inputfoucs(){
      this.inputshow=!this.inputshow
      this.$nextTick(function () {
        //DOM 更新了
        this.$refs.input.focus()
      })
      console.log(this.$refs)
    },
    inputblur(){
      this.inputshow=!this.inputshow
    },
    GoDiscuss(){

    }
  }
}
</script>

<style scoped>
.dmain {
  position: relative;
  height: 85%;
  width: 100%;
  margin-top: 1%;
  overflow: scroll;
  overflow-x: hidden;
}

.dmain-single {
  position: relative;
  width: 100%;
  background-color: white;
  margin-bottom: 5px;
}

.dmain-single-top {
  position: relative;
  width: 100%;
}

.dmain-single-top-name {
  width: 100%;
  height: 50px;
  display: flex;
}

.dmain-single-top-name-head {
  margin-top: 9px;
  margin-left: 9px;
  height: 30px;
  width: 30px;
  border-radius: 30px;
  border: 1px solid #ccc;
  background-size: 100% 100%;
}

.dmain-single-top-name-id {
  position: absolute;
  left: 15%;
  top: 5%;
}

.dmain-single-top-name-id-time {
  font-size: 12px;
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.80);
  color: #ccc;
}

.dmain-single-top-name-id-font {
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  font-family: 'siyuan';
}

.dmain-single-top-passage {
  letter-spacing: 1px;
  position: relative;
  margin-left: 7px;
  margin-right: 7px;
}

.dmain-single-photo {
  position: relative;
  width: 100%;
  margin: 0 auto;
  left: 2%;
}

.dmain-single-photo-single {
  position: relative;
  height: 95px;
  width: 30%;
  margin-left: 5px;
  margin-bottom: 3px;
  float: left;

}

.dmain-single-photo-single img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dmain-single-function {
  position: relative;
  display: flex;
  margin-top: -10px;
  width: 100%;
  height: 40px;
}

.dmain-single-function-single {
  position: relative;
  width: 12%;
  heigth: 9%;
  margin-left: 16%;
  margin-top: 15px;
}

.dmain-single-function-single img {
  height: 18px;
  width: 18px;
  float: left;
}
.dmain-single-function-single div{
  position:relative;
  left:9%;
  font-size: 17px;
  float: right;
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.80);
  color: #707070;
}
.noshowinput{
  display: block;
  position: absolute;
  z-index: -1;
  left: -1000px;
  top: 0px;
}
.showinput{
  position: fixed;
  width:70%;
  height: 6%;
  bottom: 0;
  left:12%;
  right:0;
  z-index: 3;
  border-radius: 8px;
  border: 1px solid black;
  outline: 0;
  background-color: white;
  text-indent: 5px;
  font-size: 14px;
}
.noshowp{
  display: block;
  position: absolute;
  z-index: -1;
  left: -1000px;
  top: 0px;
}
.showp{
  position: fixed;
  bottom: -2%;
  left:86%;
  right:0;
  z-index: 3;
}
.clear{
  clear:both
}
.comment{
  position: relative;
}
.comment-single{
  position: relative;
  margin-top: 4px;
  margin-left: 9px;
  letter-spacing: 2px;
  font-size: 14px;
}
.comment-single-name{
  display:inline-block;
  position: relative;
  color:#436082;
}
.comment-single-text{
  margin: 0;
  display:inline-block;
  position: relative;
}
</style>
