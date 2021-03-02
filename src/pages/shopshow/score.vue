<template>
  <div class="pages">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="myScore">
      <div class="cell">
        <span>我的积分</span>
        <span>1000</span>
      </div>
    </div>
    <van-card
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      v-for="(item,index) in 20"
      :key="index"
      @click="gotoshopshow"
    >
      <template slot="price">
        <div>10积分</div>
      </template>
      <template slot="num">
        <van-button plain type="primary" size="mini">兑换</van-button>
      </template>

    </van-card>

  </div>
</template>

<script>
export default {
  name: "score",
  data() {
    return {
      images: [
        'http://img01.yzcdn.cn/vant/apple-1.jpg',
        'http://img01.yzcdn.cn/vant/apple-2.jpg',
      ]

    };
  },
  mounted() {
    document.title = '积分福利社'
  },
  methods: {
    gotoshopshow(){
      this.$router.push('/shopshow')
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
