<template>
  <div class="contents">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动姓名">
          <el-input v-model="form.name" placeholder="请输入活动姓名"></el-input>
      </el-form-item>
      <el-form-item label="活动类型">
          <el-input v-model="form.type" placeholder="请输入活动类型"></el-input>
      </el-form-item>
      <el-form-item label="组织者ID">
          <el-input v-model="form.author" placeholder="请输入组织者ID"></el-input>
      </el-form-item>
      <el-form-item label="活动时间">
          <el-input v-model="form.time" placeholder="请输入活动时间"></el-input>
      </el-form-item>
      <el-form-item label="报名人数">
        <el-input v-model="form.num" placeholder="请输入活动时间"></el-input>
      </el-form-item>
      <el-form-item label="活动地点">
        <el-input v-model="form.place" placeholder="请输入活动时间"></el-input>
      </el-form-item>
      <el-form-item label="活动内容">
        <el-col class="declaration" :span="50">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="form.textarea">
          </el-input>
        </el-col>
      </el-form-item>
    </el-form>
    <el-row class="buttons">
      <input type="file" style="display: none;" id="file" ref="myFile" multiple="multiple" @click="upload">
      <el-button type="info" plain @click="goFile()">上传文件</el-button>
      <el-button type="primary" plain @click="submit">提交信息</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "contents",
  data(){
    return{
      form:{
        name:'',
        type:'',
        time:'',
        author:'',
        num:'',
        place:'',
        textarea:''
      },
    }
  },
  methods:{
    goFile() {
      this.$refs.myFile.click();
    },
    upload(){

      let myFile = this.$refs.myFile;
      let files = myFile.files;
      var formData = new FormData();
      for(var i = 0;i < files.length; i++){
        formData.append("file",files[i]);

      }
      // var filename = document.getElementById('file');
      // document.getElementById('file').innerHTML=filename.files[0].name;
    },
    submit(){
      var that = this;
      this.$axios.post("/api/volunteer/activity/addActivity",JSON.stringify({
        "activityList": [{
          "activityName": that.form.name,
          "activityContent": that.form.textarea,
          "activityOrganizer": that.form.author,
          "enrolledNumber": null,
          "requestedNumber": that.form.num,
          "activityType": that.form.type,
          "activityPlace": that.form.place,
          "isActivityPicture": false,
            }]
          }),{
            headers: {token: that.$store.getters.getToken,"Content-Type": "application/json;charset=utf-8"}
          }
      )
          .then(function (response) {
            if(response.data.success == true){
              alert("修改成功")
              that.$router.push('/firstpage')
            }
            else{
              alert("修改失败")
            }
            console.log(that)
          })
          .catch(function (error) {
            console.log(error);
          });
      alert("提交成功！")
    },
  }
}
</script>

<style scoped>
.contents{
  position:absolute;
  top:10%;
  left:5%;
}
.buttons{
  position:absolute;
  left:20%;
}
</style>
