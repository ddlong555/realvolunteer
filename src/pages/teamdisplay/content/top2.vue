<template>
  <div class="top2">
    <div class="top">
      <div class="top2-img1">
        <img @click="back" src="../../../assets/image/teamdis/return.svg" alt=""/>
        <el-dialog title="分享至" :visible.sync="dialogVisible">
          <el-table :data="app">
            <el-table-column property="way" label="方式"></el-table-column>
          </el-table>
        </el-dialog>
      </div>
      <div class="top2-title">
        <h>{{ title }}</h>
      </div>
      <div class="top2-img2">
        <img @click="dialogVisible = true" src="../../../assets/image/teamdis/share.svg" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top2",
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
      dialogVisible:false,
      title:"华东师范大学团队",
    }
  },
  methods:{
    back(){
      this.$router.replace('/activity')
    }
  }
}
</script>

<style scoped>

.top2{
  height :25%;
  width :100%;
}
.top{
  height :7%;
  width :100%;
  position:absolute;
  background-color: darkgray;
}
.top2-img1{
  height:50px;
  width:50px;
  position:absolute;
  top:2%;
  left:1%;
}
.top2-img1 img {
  height:35px;
  width:35px;
}
.top2-title{
  position:absolute;
  left:25%;
  right:10%;
}
.top2-title h{
  font-family: "siyuan";
  font-size:35px;
}
.top2-img2{
  position:absolute;
  top:1%;
  left:93%;
}
.top2-img2 img{
  height:37px;
  width:37px;
}
</style>
