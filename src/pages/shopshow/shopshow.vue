<template>
  <div class="shopshow">
   <shopshowtop>
   </shopshowtop>
    <div class="content">
      <div class="name">
        <div class="title">
          {{name}}
        </div>
        <div class="extra">
          <div class="price">
            {{value}}
          </div>
          <div class="honey">
            <img src="../../assets/image/me/shop/honey.svg" alt="">
          </div>
          <div class="sale-counts">
            剩余{{num}}件
          </div>
        </div>
      </div>
      <div class="introduction">
        <img :src=introduction.goodsPictureUrl alt="">
        <img :src=introduction.goodsPictureIntroUrl alt="">
      </div>
    </div>
    <div class="bottom">
      <div class="border"></div>
<!--      <div class="know">-->
<!--        <div class="text">-->
<!--          兑换须知-->
<!--        </div>-->
<!--      </div>-->
      <div class="buy">
        <div class="text1" @click="exchange">
          立即兑换
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper from "@/components/common/swiper/swiper";
import shopshowtop from "@/pages/shopshow/shopshowtop";

export default {
  name: "shopshow",
  components: {
    shopshowtop
  },
  data() {
    return {
      name:"",
      value:0,
      num:0,
      tel:"",
      address:"",
      introduction: {goodsPictureUrl:"", goodsPictureIntroUrl:""},
      pic: [{
        link: "",
        image: require("../../assets/image/test/a.jpg")
      },
        {
          link: "",
          image: require("../../assets/image/test/ad.jpg")
        },
        {
          link: "",
          image: require("../../assets/image/test/b.jpg")
        },
        {
          link: "",
          image: require("../../assets/image/test/c.jpg")
        },
      ]
    }
  },
  created(){
    var that = this
    this.$axios.get("/api/volunteer/goods/getGoodsInfoById",
        {
          headers: {
            token: that.$store.getters.getToken
          },
          params:{
            "goodsId":this.$route.query.goodsId
          }
        })
        .then((res) => {
          if(res!=null){
            console.log(res);
            that.name = res.data.result.name
            that.value = res.data.result.value
            that.num = res.data.result.num
            that.introduction.goodsPictureUrl = res.data.result.goodsPictureUrl
            that.introduction.goodsPictureIntroUrl= res.data.result.goodsPictureIntroUrl
            // alert("hgagdjs")
          }
        })
        .catch((error) => {
          console.log(error);
        });
  },
  methods:{
    exchange(){
      var that = this
      this.$axios.get("/api/volunteer/userInfo/getUserInfoByUserId",
          {
            headers: {
              token: that.$store.getters.getToken
            }
          })
          .then((res) => {
            if(res!=null){
              console.log(res);
              that.tel = res.data.result.tel
              that.address = res.data.result.address
            }
          })
          .catch((error) => {
            console.log(error);
          });
      this.$axios.post("/api/volunteer/goods/buyGoods?goodsId="+that.$route.query.goodsId, {

      },
          {
            headers: {token: that.$store.getters.getToken}
          }
      )
          .then(function (response) {
            if(response.data.success == true){
              alert(response.data.msg)
              if(that.tel == null || that.address == null) {
                alert("请完善个人信息后领取奖品")
              }
              that.$router.back()
            }
            else{
              alert(response.data.msg)
            }
            console.log(that)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  }
}
</script>

<style lang="stylus" scoped>
.shopshow
  position absolute
  background-color white
  width 100%
  height 100%

  .content
    position relative
    width 100%
    height: 86%
    overflow scroll

    .swiper
      position relative
      width 100%
      height 39%

    .name
      position relative
      width 100%
      height: 13%
      z-index 3
      background-color white

      .title
        position absolute
        width 98%
        height 50%
        font-size 19px;
        font-weight bold
        letter-spacing 3px
        top 5%
        left 2%

      .extra
        position absolute
        display flex
        width 98%
        height 50%
        top 50%
        left 2%

        .price
          position relative
          width auto
          height 100%
          color #fa2209
          font-size 18px;

        .honey
          position relative
          width 20px
          height 20px

        img
          width: 100%;
          height: 100%;

        .sale-counts
          position absolute
          color #707070
          font-size 13px;
          right 5%
          top 8%

    .introduction
      position relative
      width 100%
      height 62%

    img
      width 100%
      height 120%
      margin-bottom -10px

  .bottom
    position fixed
    width 100%
    height 7%
    background-color white
    bottom 0

    .border
      position absolute
      width 100%
      height 10%
      top 6%
      border-top: solid 1px #c0c0c0;
      z-index 1

    .know
      position absolute
      top 15%
      width 33%
      height 70%
      border-right: solid 1px #c0c0c0;

      .text
        position absolute
        width 100%
        height 100%
        top 15%
        font-size 15px;
        letter-spacing 3px;
        color #707070
        text-align center

    .buy
      position absolute
      top: 6%
      left 67%
      width 33%
      height 94%
      background-color #d62f36

      .text1
        position absolute
        width 100%
        height 100%
        top 24%
        font-size 15px;
        letter-spacing 3px;
        color white
        text-align center
</style>
