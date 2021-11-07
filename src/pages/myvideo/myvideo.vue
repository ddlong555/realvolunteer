<template>
  <div class="video" :style="{ height: bodyHeight + 'px' }">
    <div class="videotop">
      <div class="videotop-top">
        <div class="videotop-top-title">
          视频专区
        </div>
        <div class="videotop-top-add" @click="Gotosendvideo">
          <img src="../../assets/image/firstpage/add.svg" alt="">
        </div>
      </div>
      <div class="videotop-children">
        <div class="list" v-for="(item,index) in nav" :key="index" @click="clicknav(item,index)" :class="{is_Click: click[index]}">{{ item }}</div>
      </div>
    </div>
    <div class="videomain">
      <div class="videomain-search">
        <img src=../../assets/image/firstpage/search.svg alt="">
        <input type="text" placeholder="华东师范大学招募"/>
      </div>
      <div class="videosingle" >
        <div class="videosingle-content" v-for="(item,index) in video" :key="index" :style="{backgroundImage:'url('+src+')'}" @click="videoshow(item,index)">
          <div class="videosingle-content-block">
            <div class="block"></div>
            <div class="videosingle-content-block-name">
              {{ item.videoTitle }}
            </div>
            <div class="videosingle-content-block-function">
              <div class="videosingle-content-block-function-single">
                <img src="../../assets/image/video/run.svg">
                <div>{{ item.videoPlayNum }}</div>
              </div>
              <div class="videosingle-content-block-function-single">
                <img src="../../assets/image/discussion/good.png" >
                <div :key=item.videoLike>{{item.videoLike}}</div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import { Bus } from "../../assets/js/event-bus.js";
export default {
  name: "myvideo",
  components: {
  },
  data() {
    return{
      nav: ['技术援助', '教育', '共同富裕', '动物救治'],
      video: {},
      click:[true,false,false,false],
      bodyHeight:0,
      src: require("../../assets/image/test/a.jpg"),
    }
  },
  activated() {
    Bus.$on("changeGood", ({like,index}) => {
      this.$nextTick(()=>{
        this.video[index].videoLike=like
      })
    });
  },
  created(){
    this.bodyHeight=document.documentElement.clientHeight;
    this.$axios.get("/api/volunteer/video/getVideoByRelativeText",
        {
          params: {
            "relativeText": "技术援助"
          }
        })
        .then((res) => {
          if (res != null)
            this.video = res.data.result;
          console.log(this.video);
        })
        .catch((error) => {
          console.log(error);
        });
  },
  methods: {
    Gotosendvideo() {
      this.$router.push('/sendVideo')
    },
    clicknav(e, index) {
      this.$axios.get("/api/volunteer/video/getVideoByRelativeText",
          {
            params: {
              "relativeText": e
            }
          })
          .then((res) => {
            if (res != null)
              this.video = res.data.result;
            console.log(this.video);
          })
          .catch((error) => {
            console.log(error);
          });
      this.click=[false,false,false,false]
      this.click[index]=true;
    },
    videoshow(item,index) {
      this.$router.push(
          {
            path: '/videoshow',
            query: {
              video:item,
              index:index
            }
          }
        )
    }
  }
}
</script>

<style lang="stylus" scoped>
.video{
  position: absolute;
  width: 100%;
}
.videomain{
  position relative
  width: 100%;
  height: 80%;
  overflow: scroll;
}
.videomain-search{
  position: relative;
  width: 100%;
  height: 5%;
}

.videomain-search input {
  position relative
  display inline-block
  width: 90%;
  height: 115%;
  left:2%;
  -webkit-appearance none;
  background-color: #eff1f4;
  background-image: none;
  border-radius: 30px;
  border: 1px solid #eff1f4;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #000;
  display: inline-block;
  line-height: 36px;
  outline: 0;
  padding: 0 20px;
  text-indent: 5px;
  font-size: 13px;
  font-weight: 500;
  padding-left 26%
}

.videomain-search img {
  position: relative;
  display inline-block
  left:29%
  height: 13px;
  width: 13px;
  z-index 1
}
.videotop {
  position: relative;
  width: 100%;
  height: 12%;
  /*background-color: #e04438;*/
  /*color:white;*/
}

.videotop-top {
  position: relative;
  height: 40%;
  width: 100%;
}

.videotop-top-add {
  position: absolute;
  left: 90%;
  top: 34%;
}

.videotop-top-add img {
  height: 20px;
  width: 20px;
}

.videotop-top-title {
  position: absolute;
  font-size: 18px;
  letter-spacing: 2px;
  text-align: center;
  height: 70%;
  width: 30%;
  left: 35%;
  top: 25%;
}

.videotop-children {
  position: relative;
  width: 100%;
  height: 30%;
  margin-top: 5%;
  /*background-color: #5bffcc;*/
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
}

.videotop-children::-webkit-scrollbar {
  display: none;
}

.list {
  white-space: nowrap;
  position: relative;
  font-size: 13px;
  width: 50%;
  height: 100%;
  margin-right: 5%;
  margin-left: 5%;
}

.is_Click {
  font-weight: bold ;
}
.videosingle {
  position: relative;
  width: 100%;
  height: 95%;
}

.videosingle-content {
  position: relative;
  width: 44%;
  height: 42%;
  top: 4%;
  left: 4%;
  margin-right: 4%;
  margin-bottom: 9%;
  float: left;
  border-radius: 8px;
  background-color: white;
  background-size: 100% 100%;
}

.videosingle-content-block {
  position: relative;
  width: 100%;
  height: 39%;
  top: 70%;
  background-color: white;
  border-radius: 8px;
}

.block {
  width: 100%;
  height: 10%;
  position: relative;
  background-color: white;
}

.videosingle-content-block-name {
  /*background-color: black;*/
  position: relative;
  width: 90%;
  height: auto;
  font-size: 12px;
  left: 5%;
  overflow: hidden;
}

.videosingle-content-block-function {
  position: absolute;
  display: flex;
  width: 100%;
  height: 25%;
  top:60%
}

.videosingle-content-block-function-single {
  position: relative;
  width: 25%;
  heigth: 50%;
  margin-right: 8%;
  margin-left: 5%;
  top: 42%;
}

.videosingle-content-block-function-single img {
  float: left;
  height: 16px;
  width: 16px;
}

.videosingle-content-block-function-single div {
  position: relative;
  left: 20%;
  top: 8%;
  font-size: 13px;
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.80);
  color: #707070;
}
</style>
