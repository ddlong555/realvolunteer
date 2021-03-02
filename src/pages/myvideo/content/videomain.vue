<template>
  <div class="videomain">
    <div class="videomain-search">
      <img src=../../../assets/image/firstpage/search.svg alt="">
      <input type="text" placeholder="华东师范大学招募"/>
    </div>
    <videosingle ></videosingle>
  </div>
</template>

<script>
import videosingle from "@/pages/myvideo/content/videosingle";
export default {
  name: "videomain",
  components:{
    videosingle
  },
  data(){
    return {
      // videolist:[{
      //   name:"这是什么神仙班级，气势太强了",
      //   viewcounts:30000,
      //   goodcounts:20000,
      //   time:"3:15",
      //   pic:require("../../../assets/image/test/a.jpg")
      // },{
      //   name:"这是什么神仙班级，气势太强了",
      //   viewcounts:30000,
      //   goodcounts:20000,
      //   time:"3:15",
      //   pic:require("../../../assets/image/test/a.jpg")
      // },{
      //   name:"这是什么神仙班级，气势太强了",
      //   viewcounts:30000,
      //   goodcounts:20000,
      //   time:"3:15",
      //   pic:require("../../../assets/image/test/a.jpg")
      // },{
      //   name:"这是什么神仙班级，气势太强了",
      //   viewcounts:30000,
      //   goodcounts:20000,
      //   time:"3:15",
      //   pic:require("../../../assets/image/test/a.jpg")
      // },{
      //   name:"这是什么神仙班级，气势太强了",
      //   viewcounts:30000,
      //   goodcounts:20000,
      //   time:"3:15",
      //   pic:require("../../../assets/image/test/a.jpg")
      // }]
    }
  }
}
</script>

<style  lang="stylus" scoped>
.videomain{
  position absolute
  width: 100%;
  height: 80%;
  top:12%;
  overflow: scroll;
}
.videomain-search{
  position: absolute;
  width: 100%;
  height: 5%;
}

.videomain-search input {
  position relative
  width: 90%;
  height: 100%;
  left:5%;
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
  position: absolute;
  left: 28%;
  top: 28%;
  height: 13px;
  width: 13px;
  z-index 1
}
</style>
