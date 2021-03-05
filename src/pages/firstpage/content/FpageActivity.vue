<template>
  <div class="main1">
    <swiper>
    </swiper>

    <div class="main-widget">
      <div class="main-widget-part">
        <img src="../../../assets/image/me/score.svg" alt="" @click="Gotoinforchange"/>
        <div class="main-widget-part-title">
          信息修改
        </div>
      </div>
      <div class="main-widget-part">
        <img src="../../../assets/image/me/score.svg" alt="" @click="Gototeam"/>
        <div class="main-widget-part-title">
          team
        </div>
      </div>
      <div class="main-widget-part">
        <img src="../../../assets/image/me/score.svg" alt="" @click="Gototeamdis"/>
        <div class="main-widget-part-title">
          teamdis
        </div>
      </div>
      <div class="main-widget-part">
        <img src="../../../assets/image/me/score.svg" alt=""/>
        <div class="main-widget-part-title">
          我的积分
        </div>
      </div>
    </div>
    <div class="act">
      <div class="act-title">
        推荐活动
      </div>
      <div class="act-gather">
        <div class="act-single" >
          <img src="../../../assets/image/test/ad.jpg" alt=""/>
          <div >
            华东师范大学志愿者招募
          </div>
        </div>

      </div>
      <div class="act-title">
        新闻专区
      </div>
      <div class="act-gather">
        <div class="act-single" @click="newshow" v-for="(item,index) in msg" :key="index">
          <img src="../../../assets/image/test/ad.jpg" alt=""/>
          <div >
            {{ item.newsContent}}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import swiper from "@/components/common/swiper/my3dswiper";

export default {
  name: "top",
  components: {
    swiper
  },
  data(){
    return {
      activityId: 1,
      msg:{}
    }
  },
  methods:{
    newshow(){
      this.$router.push('/news')
    },
    Gototeam(){
      this.$router.push('/team')
    },
    Gototeamdis(){
      this.$router.push('/teamdis')
    },
    Gotoinforchange(){
      this.$router.push('/informationChange')
    }
  },
  created() {
    this.$axios.get("/api/volunteer/activityNews/getActivityNewsByActivityId",
        {
          params:{
            "activityId":1
          }
        })
        .then((res) => {
          if(res!=null)
            this.msg=res.data.result;
          console.log(this.msg);
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
.act{
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
}
.act-single div{
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
