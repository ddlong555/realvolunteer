<template>
  <div class="shopshow">
    <shopshowtop>
    </shopshowtop>
    <div class="content">
      <div class="swiper">
        <swiper :banners="pic">
        </swiper>
      </div>
      <div class="name">
        <div class="title">
          海绵宝宝玩偶
        </div>
        <div class="extra">
          <div class="price">
            3500
          </div>
          <div class="honey">
            <img src="../../assets/image/me/shop/honey.svg" alt="">
          </div>
          <div class="sale-counts">
            剩余5件
          </div>
        </div>
      </div>
      <div class="introduction">
        <img :src=item alt="" v-for="(item,index) in introduction" :key="index">
      </div>
    </div>
    <div class="bottom">
      <div class="border"></div>
      <div class="know">
        <div class="text">
          购买须知
        </div>
      </div>
      <div class="buy">
        <div class="text1">
          立即购买
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "@/components/common/swiper/swiper";
import shopshowtop from "@/pages/shopshow/shopshowtop";

export default {
  name: "shopshow",
  components: {
    Swiper,
    shopshowtop
  }, methods: {},

  data() {
    return {
      introduction: [require("../../assets/image/me/shop/show1.png"), require("../../assets/image/me/shop/show2.png"), require("../../assets/image/me/shop/kone.jpg")],
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
  }
}
</script>

<style lang="stylus" scoped>
.shopshow
  position absolute
  width 100%
  height 100%

  .content
    position absolute
    top 7%
    width 100%
    height: 86%
    overflow scroll

    .swiper
      position absolute
      width 100%
      height 39%

    .name
      position absolute
      width 100%
      height: 13%
      top: 38%
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
          top -15%
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
      position absolute
      width 100%
      height 62%
      top 52%

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
