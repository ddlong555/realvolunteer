<template>
  <div class="pages">
    <div class="top-menu">
      <van-dropdown-menu>
        <van-dropdown-item v-model="address" :options="addressOption"/>
        <van-dropdown-item v-model="type" :options="typeOption"/>
        <van-dropdown-item v-model="filter" :options="filterOption"/>
      </van-dropdown-menu>
    </div>
    <div class="content-list">
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="---我是有底线的---"
          @load="onLoad"
      >
        <div v-for="(i,x) in activity" :key="x">
          <div v-for="(item,index) in activity[x].data" :key="index" class="content-line" @click="gotoactDis(activity[x].data[index].activityId,activity[x].data[index].activityPictureList[0].pictureUrl)">
            <img :src=item.activityPictureList[0].pictureUrl class="actimg"/>
            <p class="line-title">{{ item.activityName }}</p>
            <p class="line-bottom">
            <span>
              <img src="@/assets/image/activity/address.png"/>101km
            </span>
              <span>
              <img src="@/assets/image/activity/position.png"/>虹口区
            </span>
              <span>
              <img src="@/assets/image/activity/me.png"
                   style="width:13px"/>{{ item.enrolledNumber }}/{{ item.requestedNumber }}
            </span>
            </p>
          </div>
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
      i: 0,
      address: 0,
      type: 'a',
      filter: 0,
      addressOption: [
        {text: '地点', value: 0},
        {text: '徐汇', value: 1},
        {text: '静安', value: 2},
        {text: '杨浦', value: 3},
      ],
      typeOption: [
        {text: '服务类型', value: 'a'},
        {text: '战役活动', value: 'b'},
        {text: '脱贫攻坚', value: 'd'},
        {text: '生态环保', value: 'e'},
        {text: '社区服务', value: 'f'},
        {text: '关爱儿童', value: 'g'},
      ],
      filterOption: [
        {text: '智能筛选', value: 0},
        {text: '按距离', value: 1},
        {text: '按时间', value: 2},
      ],
      activity: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        this.$axios.get("/api/volunteer/activity/getActivityByNumber",
            {
              params: {
                "number": 10
              }
            })
            .then((res) => {
              if (res != null) {
                var obj = {};
                obj.data = res.data.result;
                this.activity.push(obj);
                this.i++;
              }
              console.log(this.activity);
            })
            .catch((error) => {
              console.log(error);
            });
        this.loading = false;
        // 数据全部加载完成
        if (this.i >= 3) {
          this.finished = true;
        }
      }, 1000);
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   // 加载状态结束
      //   this.loading = false;
      //   // 数据全部加载完成
      //   if (this.list.length >= 30) {
      //     this.finished = true;
      //   }
      // }, 1000);
    },
    gotoactDis(e,f){
      console.log(e)
      this.$router.push({path: '/activityDisplay', query: {activityId: e,PictureList:f}})
    }
  },
  watch: {//监听搜索
    address() {
      this.finished = false;
      this.loading = true;
      this.list = []
      this.onLoad()
    },
    type() {
      this.finished = false;
      this.loading = true;
      this.list = []
      this.onLoad()
    },
    filter() {
      this.finished = false;
      this.loading = true;
      this.list = []
      this.onLoad()
    }
  }
};
</script>

<style lang="scss" scoped>
.actimg {
  object-fit: cover;
  height: 158px;
  width: 70%;

}

.pages {
  .top-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }

  .content-list {
    padding-top: 50px;
    height: calc(100vh - 100px);
    overflow: auto;

    .content-line:first-child {
      padding-top: 10px;
    }

    .content-line {
      padding: 15px 10px 10px 10px;
      border-bottom: 1px solid #e5e5e5;

      .line-title {
        font-weight: 800;
        font-size: 14px;
      }

      p {
        margin: 8px 0 0 0;
      }

      img {
        width: 100%;
      }

      .line-bottom {
        span {
          display: inline-flex;
          font-size: 12px;
          align-items: center;
          color: #8a8a8a;
          margin-right: 15px;

          img {
            width: 15px;
            margin-right: 2px;
          }
        }
      }
    }
  }
}

</style>
