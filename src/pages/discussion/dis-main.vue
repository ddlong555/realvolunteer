<template>
  <div class="dmain">
    <div class="dmain-single" v-for="(item,index) in discuss" :key="index">
      <div class="dmain-single-top">
        <div class="dmain-single-top-name">
          <div class="dmain-single-top-name-head" :style="{backgroundImage:item.commentPublisher.headPicture===null?'url('+head+')':'url('+item.commentPublisher.headPicture+')'}">
          </div>
          <div class="dmain-single-top-name-id">
            <div class="dmain-single-top-name-id-font">
              {{ item.commentPublisher.userName }}
            </div>
            <div class="dmain-single-top-name-id-time">
              {{ date[index] }}
            </div>
          </div>
        </div>
        <div class="dmain-single-top-passage">
          {{ item.commentText }}
        </div>
      </div>
      <div class="dmain-single-photo">
        <div class="dmain-single-photo-single" v-for="(x,y) in item.commentPictureList" :key="y">
            <img :src=x.pictureUrl alt="" preview="0" >
        </div>
        <div class="clear"></div>
      </div>
      <div class="comment">
        <div class="comment-single" v-for="(i,j) in item.commentResponseList" :key="j">
          <div class="comment-single-name">
            {{i.responsePublisher.userName}}:
          </div>
          <p class="comment-single-text">
            {{i.responseText}}
          </p>
        </div>

      </div>
      <div class="dmain-single-function">
        <div class="dmain-single-function-single">
          <img src="../../assets/image/discussion/zhuanfa.svg" alt="">
          <div>0</div>
        </div>
        <div class="dmain-single-function-single" @click="inputfoucs(index)">
          <img src="../../assets/image/discussion/say.svg" alt="">
          <div>{{item.commentResponseList.length}}</div>
        </div>
        <div>
          <input :class="inputshow?'showinput':'noshowinput'" ref="input" v-model="inputvalue" @blur="inputblur"/>
          <p ref="text" :class="inputshow?'showp':'noshowp'" @click="GoDiscuss(inputvalue)" >发送</p>
        </div>
        <div class="dmain-single-function-single" @click="GoodAdd(index)">
          <img src="../../assets/image/discussion/good.png" alt="" v-if="!good[index]">
          <img src="../../assets/image/discussion/good1.png" alt="" v-else>
          <div>{{ item.commentLike }}</div>
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
      id: "张文瀚",
      time: "3分钟前",
      head: require("../../assets/image/me/boy.svg"),
      good:[false,false,false,false,false],
      number:0,
      inputvalue: "",
      inputshow: false,
      discuss: [],
      date: [],
      say:0
    }
  },
  computed:{
    discusslength(){
      return this.discuss.length
    }
  },
  methods: {
    inputfoucs(e) {
      this.inputshow = !this.inputshow
      this.$nextTick(function () {
        //DOM 更新了
        this.$refs.input.focus()
      })
      this.say=e
      // console.log(this.say)
    },
    inputblur() {
      this.inputshow = !this.inputshow
    },

    GoDiscuss(e){
      let comment={
        responsePublisher:{
          userName:this.$store.getters.getUser.userName
        },
        responseText:e
      }
      this.discuss[this.say].commentResponseList.push(comment)
      console.log(this.discuss)
    },
    GoodAdd(e){
      if(this.good[e]==true){
        this.discuss[e].commentLike--;
      }
      else{
        this.discuss[e].commentLike++;
      }
      this.good[e]=!this.good[e];
    }
  },

  created() {
    this.$axios.get("/api/volunteer/comment/getCommentByNumber",
        {
          params: {
            "number": 5
          }
        })
        .then((res) => {
          if (res != null) {
            for (let i in res.data.result)
              this.discuss.push(res.data.result[i]);
            for (let i in this.discuss) {
              let date = new Date(this.discuss[i].commentDate)
              let M = date.getMonth() + 1
              let D = date.getDay()
              this.date[i] = M + "-" + D
            }
          }
          this.$previewRefresh();
          console.log(this.discuss);
        })
        .catch((error) => {
          console.log(error);
        });
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
  top: 12%;
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
  margin-left: 15px;
  margin-right: 7px;
}

.dmain-single-photo {
  position: relative;
  width: 100%;
  margin-top: 9px;
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
  z-index: 3;
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

.dmain-single-function-single div {
  position: relative;
  left: 9%;
  font-size: 17px;
  float: right;
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.80);
  color: #707070;
}

.noshowinput {
  display: block;
  position: absolute;
  z-index: -1;
  left: -1000px;
  top: 0px;
}

.showinput {
  position: fixed;
  width: 70%;
  height: 6%;
  bottom: 0;
  left: 12%;
  right: 0;
  z-index: 3;
  border-radius: 8px;
  border: 1px solid black;
  outline: 0;
  background-color: white;
  text-indent: 5px;
  font-size: 14px;
}

.noshowp {
  display: block;
  position: absolute;
  z-index: -1;
  left: -1000px;
  top: 0px;
}

.showp {
  position: fixed;
  bottom: -2%;
  left: 86%;
  right: 0;
  z-index: 3;
}

.clear {
  clear: both
}

.comment {
  position: relative;
}

.comment-single {
  position: relative;
  margin-top: 4px;
  margin-left: 9px;
  letter-spacing: 2px;
  font-size: 14px;
}

.comment-single-name {
  display: inline-block;
  position: relative;
  color: #436082;
}

.comment-single-text {
  margin: 0;
  display: inline-block;
  position: relative;
}
</style>
