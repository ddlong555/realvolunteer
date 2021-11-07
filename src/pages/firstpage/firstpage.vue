<template>
  <div class="fpage" :style="{ height: bodyHeight + 'px' }">
    <div class="main">
      <div class="main-top">
        <div class="main-top-address">上海</div>
        <div class="main-top-search">
          <img src=../../assets/image/firstpage/search.svg alt="">
          <input type="text" placeholder="searchWord" v-model="searchWord" @keyup.enter="search"/>
        </div>
        <div class="main-top-right" @click="OpenPopup">
          <img src="../../assets/image/firstpage/add.svg" alt="">
        </div>
      </div>
    </div>
    <act :isSearch="isSearch" :searchWord="searchWord"></act>
    <popup @ListenChild="ChangePopup" :isShow="isShow" :topDistance="topDistance" :widNum="widNum" :leftSite="leftSite">
      <div slot="header"></div>
      <div slot="main" >
        <div v-for="(item,index) in Add" :key="index" @click="PushUpload(index)" class="uplaodsingle">
          <img :src=item.AddImg alt=""/>
          <p>{{item.AddP}}</p>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import act from "@/pages/firstpage/content/FpageActivity";
import popup from "../../components/common/Popup/Popup"

export default {
  name: "firstpage",
  components: {
    act,
    popup
  },
  data() {
    return {
      bodyHeight: 0,
      isShow: false,
      topDistance: 8,
      widNum: 40,
      leftSite: 60,
      searchWord:"",
      isSearch: false,
      Add:[
        {
          AddImg:require("../../assets/image/upload/uploaddis.svg"),
          AddP: "发布讨论",
          AddPush: "/sendArticle"
        },
        {
          AddImg:require("../../assets/image/upload/uploadvideo.svg"),
          AddP: "上传视频",
          AddPush: "/sendVideo"
        },
        {
          AddImg:require("../../assets/image/upload/uploadact.svg"),
          AddP: "发布活动",
          AddPush: "/team"
        }
      ]
    }
  },
  mounted() {
    this.bodyHeight = document.documentElement.clientHeight
  },
  methods: {
    ChangePopup() {
      this.isShow = false;
    },
    OpenPopup() {
      this.isShow = true;
      console.log(this.bodyHeight)
    },
    PushUpload(e){
      this.$router.push(this.Add[e].AddPush)
    },
    search(){
      this.isSearch = true;
    }
  }
}
</script>

<style lang="stylus" scoped>
.fpage {
  position: absolute;
  width: 100%;
}

.main {
  display: flex;
  position: relative;
  width: 100%;
  height: 8%;
  background-color white
}

.main-top {
  position absolute
  width: 100%;
  height: 80%;
  top: 20%;
}

.main-top-address {
  letter-spacing: 2px;
  position: absolute;
  left: 15px;
  top: 5px;
}

.main-top-search {
  position: absolute;
  left: 24%;
  width: 58%;
  height: 100%;
}

.main-top-search input {
  width: 100%;
  -webkit-appearance none;
  background-color: #f2f3f5;
  background-image: none;
  border-radius: 30px;
  border: 1px solid white;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #000;
  display: inline-block;
  height: 75%;
  line-height: 36px;
  outline: 0;
  padding: 0 25px;
  text-indent: 5px;
  font-size: 14px;
  font-weight: 500;
}

.main-top-search img {
  position: absolute;
  left: 4%;
  top: 25%;
  height: 13px;
  width: 13px;
}

.main-top-right {
  position: absolute;
  right: 5%;
  top: 10%;
}

.main-top-right img {
  width: 23px;
  height: 23px;
}
.uplaodsingle{
  width:100px
}
.uplaodsingle img{
  width:18px;
  height:18px;
  margin-right 15px
  float left
}
.uplaodsingle p{
 position relative

}
</style>
