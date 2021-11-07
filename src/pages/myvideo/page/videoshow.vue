<template>
  <div class="main" :style="{ height: bodyHeight + 'px' }">
    <div class="return" @click="videoreturn">
      <img src="../../../assets/image/video/return-blod.svg" alt=""/>
    </div>
    <d-player ref="player" id="player" :options="options" class="player"></d-player>
    <div class="introduction">
      <div class="title">
        {{ this.video.videoTitle }}
      </div>
      <div class="words">
        <div class="author" :style="{backgroundImage:'url('+src+')',backgroundSize:'100% 100%'}">
        </div>
        <div class="time">
          {{ this.video.videoPublisher.userName }}
        </div>
        <div class="time">{{ this.video.videoDate }}</div>
        <div class="detail">
          <div class="decorate">
          </div>
          <div class="blod">
            简介
          </div>
          <div class="txt">
            {{ this.video.videoText }}
          </div>
        </div>
      </div>
    </div>
    <div class="discussion">
      <div class="dis-title">
        <div class="decorate">
        </div>
        <div class="blod">
          评论
        </div>
      </div>
      <div class="dis-part" v-for="(item,index) in this.video.videoCommentDTOList" :key="index">
        <div class="comment1">
          <img src="../../../assets/image/video/headpic.png" alt=""/>
          <p class="username">{{ item.commentPublisher.userName }}</p>
        </div>
        <p class="comment">{{ item.commentText }}</p>
      </div>
    </div>
    <div class="dis-function">
      <input class="input" placeholder="欢迎在这里提出你的想法" v-model="inputvalue"/>
      <div @click="comment(inputvalue)">发送</div>
      <img src="../../../assets/image/discussion/good.png" alt="" @click="changeGood()" v-if="!good"/>
      <img src="../../../assets/image/discussion/good1.png" alt="" @click="changeGood()" v-if="good" />
      <!--      <img src="../../../assets/image/video/share3.svg" alt="" @click="share()"/>-->
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
import Vue from "vue";
import VueDPlayer from "vue-dplayer";
import "vue-dplayer/dist/vue-dplayer.css";
import { Bus } from "../../../assets/js/event-bus";
// import NativeShare from "nativeshare";

Vue.use(VueDPlayer);
export default {
  name: "about",
  data() {
    return {
      inputvalue:"",
      good:false,
      msg: {},
      video: {},
      year: "",
      shlist: {
        appId: 1,
        timestamp: '2021.01.16',
        nonceStr: 'ddd',
        signature: '龙正武',
      },
      content: '这个乐队我也不知道什么名字，但里面有个男生唱歌很好听。这个乐队我也不知道什么名字，但里面有个男生唱歌很好听。',
      videoactive: false,
      src: require('../../../assets/image/video/headpic.png'),
      bodyHeight: 0,
      options: {
        playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2, 3], //可选的播放速度，可自定义
        // subtitle: {   //字幕
        //   url: "",   //字幕网址
        //   color:'#fff' 字幕颜色
        //   fontSize: "20px",
        //   bottom: "40px",
        // },
        container: document.getElementById('dplayer'),
        autoplay: false,
        theme: '#FADFA3',
        loop: true,
        lang: 'zh-cn',
        screenshot: true,
        hotkey: true,
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        video: {
          url: this.$route.query.video.videoUrl,                                         // Required, video url
          pic: require('../../../assets/image/video/videopic.jpg'),// Optional, music picture
          thumbnails: '../../../assets/image/video/videopic.jpg',
          type: 'auto',
        },
        // danmaku: {
        //   api: "https://api.prprpr.me/dplayer/",// Optional, showing danmaku
        //   bottom: "15%", //值，例如：10px，10％，即弹幕底部和播放器底部之间的距离，以防止遮挡字幕
        //   unlimited: true, //即使弹幕重叠也显示所有弹幕                                               // Optional, maximum quantity of danmaku
        // }
      },
    };
  },
  computed: {
    show() {
      if (!this.videoactive) {
        return "展开"
      } else {
        return "收起"
      }
    },
  },
  mounted() {
    this.bodyHeight = document.documentElement.clientHeight
  },
  created() {
    this.video = this.$route.query.video
    let date = new Date(this.video.videoDate)
    let M = date.getMonth() + 1
    let D = date.getDay()
    let Y = date.getFullYear()
    this.video.videoDate = Y + "-" + M + "-" + D
    console.log(this.video)
  },
  methods: {
    videoreturn() {
      this.$router.back()
    },
    fold() {
      this.videoactive = !this.videoactive
      alert(this.videoactive)
    },
    comment(e){
      let comment={
        commentPublisher:{
          userName:this.$store.getters.getUser.userName
        },
        commentText:e
      }
      this.video.videoCommentDTOList.push(comment)
      this.inputvalue=""
      console.log(this.video)
    },
    changeGood(){
      if(this.good==false){
        this.video.videoLike=this.video.videoLike+1;
        this.good=!this.good
      }
      else{
        this.video.videoLike=this.video.videoLike-1;
        this.good=!this.good
      }
      Bus.$emit("changeGood", {
        like:this.video.videoLike,
        index:this.$route.query.index
      });
    }
    // share() {
    //   const self = this
    //
    //   var nativeShare = new NativeShare({
    //     wechatConfig: {
    //       appId: self.shlist.appId,
    //       timestamp: self.shlist.timestamp,
    //       nonceStr: self.shlist.nonceStr,
    //       signature: self.shlist.signature,
    //     },
    //     // 让你修改的分享的文案同步到标签里，比如title文案会同步到<title>标签中
    //     // 这样可以让一些不支持分享的浏览器也能修改部分文案，默认都不会同步
    //     syncDescToTag: false,
    //     syncIconToTag: false,
    //     syncTitleToTag: false,
    //   })


// // 设置分享文案
//       nativeShare.setShareData({
//         icon: '',
//         link: window.location.href,
//         title: '支援帮',
//         desc: self.title,
//         from: '@fa-ge',
//       })

// // 唤起浏览器原生分享组件(如果在微信中不会唤起，此时call方法只会设置文案。类似setShareData)
//       try {
//         nativeShare.call()
//         // 如果是分享到微信则需要 nativeShare.call('wechatFriend')
//         // 类似的命令下面有介绍
//         console.log('支持')
//       } catch (err) {
//         // 如果不支持，你可以在这里做降级处理
//         self.$toast('不支持该浏览器自动分享,请您手动分享')
//       }
//       // this.showShare = false;
//     }
  },
};
</script>

<style lang="stylus" scoped>
.main {
  width: 100%;
  height: 100%;
  background-color white
}

.player {
  width: 100%;
  height: 30%;
}

///deep/ .dplayer-danmaku-item {
//  span {
//    border: none !important; //去掉弹幕边框
//  }
//}

.return {
  position absolute
  top 18px
  left 18px
  width 24px
  height 24px
  text-align center
  z-index 2
}

.return img {
  height 18px;
  width 18px;
  padding-top 3px
}

.introduction {
  position: relative;
  width: 92%;
  left: 5%;
  top: 2%;
}

.title {
  position relative
  width: 100%;
  color: #101010;
  font-size: 19px;
  font-weight: bolder
  letter-spacing 1px;
}

.words {
  position relative
  width: 100%;
  margin-top 8px
  font-size: 12px;
  color: #9897a5;
  //overflow: hidden;
  //text-overflow: ellipsis;
  //white-space:nowrap;
}

.author {
  position: relative;
  height: 35px;
  width: 35px;
  border-radius: 35px;
  float: left;
}

.time {
  position: relative;
  height: 18px;
  width: 50%;
  left: 4%;
}

.decorate {
  position: relative;
  width: 1%;
  height: 18px;
  float: left;
  background-color: #f00104;
}

.blod {
  position: relative;
  left: 2%;
  width: 98%;
  height: 30%;
  line-height: 110%;
  color: black;
  font-weight: bold;
  font-size: 16px;

}

.detail {
  position: relative;
  width: 100%;
  margin-top 10px
}

.txt {
  position: relative;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin-top 9px
  overflow hidden
}

//.btn {
//  position absolute
//  width: 10%;
//  height: 20%;
//  text-align center
//  z-index 1
//  left 50%
//  top: 200%;
//  color: #168bd0;
//}

//.overhidden {
//  display: -webkit-box;
//  -webkit-box-orient: vertical;
//  -webkit-line-clamp: 3;
//  overflow: hidden;
//}

.discussion {
  position relative
  top: 3%;
  width: 100%;
  border-top 1px solid #f2f2f2
}

.dis-title {
  position: relative;
  width: 95%;
  left: 5%;
  margin-top 10px
}

.dis-function {
  position fixed
  bottom 0
  left: 0;
  right: 0;
  width 100%
  height 7%
  background-color white
  box-shadow: 0 -2px 5px rgba(20, 20, 20, .1);
}

.dis-function div {
  float right
  position relative
  top 16%
  left -15%
  height 22px
  width 50px
}
.dis-function img {
  float right
  position relative
  top 16%
  left 7%
  height 22px
  width 22px
}

.input {
  position relative
  display inline-block
  z-index 3
  top 5%
  left 7%
  background-color: #f2f3f5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width 60%
  height 30px
  outline: none
  border: none
  border-radius 5px
  display: inline-block;
  line-height: 90%;
  outline: 0;
  text-indent: 5px;
  font-size: 14px;
  font-weight: 500;
}

.clear {
  clear: both
  width:100%;
  height:12%
}

.username {
  margin-left 40px;
  margin-top 17px;
  color #fa8950
  font-size 12px
}

.comment {
  margin:0 0 0 35px
  font-size 15px
}
.comment1{
  position relative
  display inline-block
}
.dis-part img {
  height: 23px;
  width: 23px;
  margin-top: 15px;
  margin-left: 10px;
  float: left;
}

</style>
