<template>
  <div class="main1">
    <swiper :banners="swiper">
    </swiper>
    <div class="act">
      <div class="act-title">
        推荐活动
      </div>
      <div class="act-gather">
        <div class="act-single" v-for="(item,index) in activity" :key="index" @click="activityshow(item.activityId,item.activityPictureList[0].pictureUrl)" >
          <img :src=GetUrl(item) alt=""/>
          <!--          <img src="https://activity-picture.oss-cn-shanghai.aliyuncs.com/activityPicture_1/1.png" alt=""/>-->
          <div>
            {{ item.activityName }}
          </div>
        </div>
      </div>
      <div class="act-title">
        新闻专区
      </div>
      <div class="act-gather">
        <div class="act-single" @click="newshow(index)" v-for="(item,index) in news" :key="index">
          <img :src=item.newsPictureList[0].pictureUrl alt=""/>
          <div>
            {{ item.newsTitle }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "@/components/common/swiper/my3dswiper";
// import activity from "@/pages/activity/activity";

export default {
  name: "top",
  components: {
    swiper
  },
  data() {
    return {
      news: {},
      activity: {},
      swiper: [],
      ImgUrl:require("../../../assets/image/activity/firstPage.png")
    }
  },
  methods: {
    newshow(e) {
      console.log(e)
      this.$router.push({
        path: '/news',
        query: {
          pdf: this.news[e].newsContent
        }
      })
    },
    activityshow(e,f) {
      this.$router.push({
        path: '/activityDisplay',
        query: {
          activityId: e,
          PictureList:f}
      })
    },
    Gototeam() {
      this.$router.push('/team')
    },

    Gototeamdis() {
      this.$router.push('/teamdis')
    },
    GotoTest() {
      this.$router.push('/test')

    }
  },
  computed: {
    GetUrl() {
      return function ( item) {
        console.log("d" + item);
        if (item.activityPictureList.length == 0)
          return this.ImgUrl
        return item.activityPictureList[0].pictureUrl
      }
    }
  },
  created() {
    this.$axios.get("/api/volunteer/swiper/getSwiperByNumber",
        {
          params: {
            "number": 5
          }
        })
        .then((res) => {
          if (res != null)
            for (let i in res.data.result)
              this.swiper.push(res.data.result[i]);
          console.log(this.swiper);
        })
        .catch((error) => {
          console.log(error);
        });
    this.$axios.get("/api/volunteer/activityNews/getActivityNewsByNumber",
        {
          params: {
            "number": 5
          }
        })
        .then((res) => {
          if (res != null)
            this.news = res.data.result;
          console.log(this.news);
        })
        .catch((error) => {
          console.log(error);
        });
    this.$axios.get("/api/volunteer/activity/getActivityByNumber",
        {
          params: {
            "number": 8
          }
        })
        .then((res) => {
          if (res != null)
            this.activity = res.data.result;
          console.log(this.activity);
        })
        .catch((error) => {
          console.log(error);
        });
  },
}
</script>

<style lang="stylus" scoped>
.main1 {
  position: relative
  top 2%
  width: 100%;
  height: 83%;
  text-align: center;
  overflow-y: scroll;
  overflow-x hidden
}

.act {
  position: relative

  width: 100%;
  height: 50%;
  text-align: center;
}

.act-gather {

}

.act-title {
  letter-spacing: 3px;
  font-size: 17px;
  margin-top 2%
}

.act-single {
  position: relative
  left: 2%;
  width: 96%;
  height auto
  margin-top: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;
  border-radius: 15px;
}

.act-single img {
  width: 95%;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
}

.act-single div {
  position relative
  font-size 13px
  text-align left
  left 3%
  letter-spacing 1px
}

.main-widget {
  display: flex;
  width: 96%;
  height: 80px;
  position: relative;
  margin-top 5%
  left: 2%;
  background-color: white;
  border-radius: 20px;
}

.main-widget-part {
  position: relative;
  left: 11px;
  top: 15px;
  height: 60px;
  width: 24%;
}

.main-widget-part img {
  position: relative;
  left: 5px;
  height: 30px;
  width: 30px;
}

.main-widget-part-title {
  position: relative;
  left: 10px;
  font-size: 10px;
  height: 30px;
  width: 70px;
}
</style>
