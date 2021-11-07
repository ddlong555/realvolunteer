<template>
  <div class="pages">
    <top2 title=""></top2>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img v-lazy="item.swiperPicture" />
      </van-swipe-item>
    </van-swipe>
    <div class="myScore">
      <div class="cell">
        <span>我的积分</span>
        <span>{{credits}}</span>
      </div>
    </div>
    <div class="goods" v-for="(item,i) in data" :ind="i">
      <van-card
          :desc=item.intro
          :title=item.name
          :thumb=item.goodsPictureUrl
          @click="gotoshopshow(i)"
      >
        <template slot="price">
          <div>{{item.value}}积分</div>
        </template>
        <template slot="num">
          <van-button plain type="primary" size="mini">兑换</van-button>
        </template>

      </van-card>
    </div>
  </div>
</template>
<script>
import top2 from "@/pages/upload/content/top2";

export default {
  components: {
    top2
  },
  name: "score",
  data() {
    return {
      data:[{name:"海绵宝宝",intro:"可爱的",goodsPictureUrl:"",value:0,goodsId:0}],
      images: [{swiperId:0,swiperPicture:""}],
      ind:0,
      credits:0
    };
  },
  created(){
    var that = this
    this.$axios.get("/api/volunteer/goodsSwiper/getSwiperByNumber?number=3")
        .then((res) => {
          if(res!=null){
            console.log(res);
            that.images = res.data.result
          }
        })
        .catch((error) => {
          console.log(error);
        });
    this.$axios.get("/api/volunteer/userInfo/getUserInfoByUserId",
        {
          headers: {
            token: that.$store.getters.getToken
          }
        })
        .then((res) => {
          if(res!=null){
            console.log(res);
            that.credits = res.data.result.credits
          }
        })
        .catch((error) => {
          console.log(error);
        });
    this.$axios.get("/api/volunteer/goods/getGoods",
        {
          headers: {
            token: that.$store.getters.getToken
          }
        })
        .then((res) => {
          if(res!=null){
            console.log(res);
            that.data = res.data.result
            // alert("hgagdjs")
          }
        })
        .catch((error) => {
          console.log(error);
        });
  },
  mounted() {
    document.title = '积分福利社'
  },
  methods: {
    gotoshopshow(index){
      this.$router.push({
        path:'/shopshow',
        query:{
        goodsId:this.data[index].goodsId
      }
      })
      console.log(this.index)
    }
  },

};
</script>

<style lang="scss" scoped>
.pages{
  padding-bottom: 50px;
}
/deep/ .van-swipe img {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  padding: 30px 60px;
  background-color: #fff;
  pointer-events: none;
}
/deep/ .van-button{
  padding:  10px;
  font-size: 14px;
}
/deep/ .van-card__bottom{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.myScore{
  margin: 12px 12px 0;
  overflow: hidden;
  border-radius: 8px;
  .cell{
    position: relative;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
  }
}


</style>
