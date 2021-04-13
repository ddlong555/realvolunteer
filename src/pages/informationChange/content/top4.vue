<template>
  <div class="top4">
    <div class="top">
      <div class="top-img1">
        <img @click="back" src="../../../assets/image/personalInformation/return.svg" alt=""/>
      </div>
      <div class="top-img2">
        <img @click="dialogVisible = true" src="../../../assets/image/personalInformation/share.svg" alt=""/>
        <el-dialog title="分享至" :visible.sync="dialogVisible">
          <el-table :data="app">
            <el-table-column property="way" label="方式"></el-table-column>
          </el-table>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top4",
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
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.top4{
  height:7%;
  width:100%;
}
.top{
  height :7%;
  width :100%;
  position:absolute;
  box-shadow: 5px 5px 5px rgba(127,127,127,.4);
  z-index: 2;
  background-color: white;
}
.top-img1{
  height:50px;
  width:50px;
  position:absolute;
  top:20%;
  left:1%;
}
.top-img1 img {
  height:25px;
  width:25px;
}
.top-img2{
  position:absolute;
  top:20%;
  right:1%;
}
.top-img2 img{
  height:25px;
  width:25px;
}
</style>
