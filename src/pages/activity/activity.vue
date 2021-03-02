<template>
  <div class="pages">
    <div class="top-menu">
      <van-dropdown-menu>
        <van-dropdown-item v-model="address" :options="addressOption" />
        <van-dropdown-item v-model="type" :options="typeOption" />
        <van-dropdown-item v-model="filter" :options="filterOption" />
      </van-dropdown-menu>
    </div>
    <div class="content-list">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="---我是有底线的---"
        @load="onLoad"
      >
        <div v-for="(item,index) in list" :key="index" class="content-line">
          <img src="@/assets/image/activity/banner.jpg"/>
          <p class="line-title">岳阳医院志愿者招募1.3</p>
          <p class="line-bottom">
            <span>
              <img src="@/assets/image/activity/address.png"/>101km
            </span>
            <span>
              <img src="@/assets/image/activity/position.png"/>虹口区
            </span>
            <span>
              <img src="@/assets/image/activity/me.png" style="width:13px"/>0/5人
            </span>
          </p>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "activity",
  data() {
    return {
      address: 0,
      type: 'a',
      filter: 0,
      addressOption: [
        { text: '地点', value: 0 },
        { text: '徐汇', value: 1 },
        { text: '静安', value: 2 },
        { text: '杨浦', value: 3 },
      ],
      typeOption: [
        { text: '服务类型', value: 'a' },
        { text: '战役活动', value: 'b' },
        { text: '脱贫攻坚', value: 'd' },
        { text: '生态环保', value: 'e' },
        { text: '社区服务', value: 'f' },
        { text: '关爱儿童', value: 'g' },
      ],
      filterOption: [
        { text: '智能筛选', value: 0 },
        { text: '按距离', value: 1 },
        { text: '按时间', value: 2 },
      ],
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 30) {
          this.finished = true;
        }
      }, 1000);
    },
  },
  watch: {//监听搜索
    address(){
      this.finished = false;
      this.loading = true;
      this.list = []
      this.onLoad()
    },
    type(){
      this.finished = false;
      this.loading = true;
      this.list = []
      this.onLoad()
    },
    filter(){
      this.finished = false;
      this.loading = true;
      this.list = []
      this.onLoad()
    }
  }
};
</script>

<style lang="scss" scoped>
.pages{
  .top-menu{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }
  .content-list{
    padding-top: 50px;
    height: calc(100vh - 100px);
    overflow: auto;
    .content-line:first-child{
      padding-top:10px;
    }
    .content-line{
      padding: 15px 10px 10px 10px;
      border-bottom: 1px solid #e5e5e5;
      .line-title{
        font-weight: 800;
        font-size: 14px;
      }
      p{
        margin:8px 0 0 0;
      }
      img{
        width: 100%;
      }
      .line-bottom{
        span{
          display: inline-flex;
          font-size: 12px;
          align-items: center;
          color: #8a8a8a;
          margin-right: 15px;
          img{
            width: 15px;
            margin-right: 2px;
          }
        }
      }
    }
  }
}

</style>
