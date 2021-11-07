<template>
  <div class="top5">
    <div class="top">
      <div class="top5-img1">
        <img @click="back" src="../../../assets/image/teamdis/return.svg" alt=""/>
        <el-dialog title="分享至" :visible.sync="dialogVisible">
          <el-table :data="app">
            <el-table-column property="way" label="方式"></el-table-column>
          </el-table>
        </el-dialog>
      </div>
      <div class="top5-title">
        <h>{{ title }}</h>
      </div>
      <div class="top5-img2">
        <img @click="dialogVisible = true" src="../../../assets/image/teamdis/share.svg" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top5",
  data(){
    return{
      app:[{
        way:'微信'
      },{
        way:'微信朋友圈'
      },{
        way:'qq'
      },{
        way:'qq空间'
      },{
        way:'微博'
      }],
      title:"发布活动",
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
  }
}
</script>

<style scoped>
.top5{
  position: absolute;
  height :7%;
  width :100%;
}
.top{
  height :100%;
  width :100%;
  position:absolute;
  top: 0%;
  box-shadow: 5px 5px 5px rgba(127,127,127,.4);
  z-index: 2;
  background-color: white;
}
.top5-img1{
  height:50px;
  width:50px;
  position:absolute;
  top:20%;
  left:1%;
}
.top5-img1 img{
  height:25px;
  width:25px;
}
.top5-title{
  position:absolute;
  top: 10%;
  left: 35%;
  right:25%;
}
.top5-title h{
  font-family: "siyuan";
  font-size:25px;
}
.top5-img2{
  position:absolute;
  top:20%;
  right:1%;
}
.top5-img2 img{
  height:25px;
  width:25px;
}
</style>

