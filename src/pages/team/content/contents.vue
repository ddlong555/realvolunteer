<template>
  <div class="contents">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动姓名">
          <el-input v-model="form.name" placeholder="请输入活动姓名"></el-input>
      </el-form-item>
      <el-form-item label="活动类型">
          <el-input v-model="form.type" placeholder="请输入活动类型"></el-input>
      </el-form-item>
      <el-form-item label="活动时间">
          <el-input v-model="form.time" placeholder="请输入活动时间"></el-input>
      </el-form-item>
      <el-form-item label="报名人数">
        <el-input v-model="form.num" placeholder="请输入报名人数"></el-input>
      </el-form-item>
      <el-form-item label="活动地点">
        <el-input v-model="form.place" placeholder="请输入活动地点"></el-input>
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
<!--      <input type="file" style="display: none;" id="file" ref="myFile" multiple="multiple" @click="upload">-->
      <el-upload
          class="upload-demo"
          ref="upload"
          action="#"
          :on-change="handleChange"
          :on-remove="handleRemove"
          :limit="3"
          multiple
          :file-list="form.fileList"
          :auto-upload="false">
        <el-button type="info" plain @click="upload">上传文件</el-button>
        <el-button type="primary" plain @click="submit">提交信息</el-button>
        <div slot="tip" class="el-upload__tip">不能超过三个文件</div>
      </el-upload>
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
        num:'',
        place:'',
        textarea:'',
        fileList: [],
      },
    }
  },
  methods:{
    // beforeUpload (file,id) {
    // let fd = new FormData()
    // fd.append('file', file)
    // fd.append('id',id)
    // axios.post(url, fd, {
    //
    // })
    // return false
    // },
    upload(){
      console.log(this.$store.getters.getUser.userId);
    },
    submit(){
      var that = this;
      let formData = new FormData();
      console.log(that.$refs.upload);
      formData.append("activityName",that.form.name);
      formData.append("activityContent",that.form.textarea);
      formData.append("enrolledNumber",0);
      formData.append("requestedNumber",that.form.num);
      formData.append("activityOrganizer",this.$store.getters.getUser.userId)
      formData.append("activityType",that.form.type);
      formData.append("activityPlace",that.form.place);
      formData.append("isActivityPicture",true);
      formData.append("isSignFileModel",true);
      this.$refs.upload.uploadFiles.map((item)=> {
        formData.append("signFileModel", item.raw);
      })
      // this.$axios.post("/api/volunteer/activity/addActivity",JSON.stringify({
      //   "activityList": [{
      //     "activityName": that.form.name,
      //     "activityContent": that.form.textarea,
      //     "activityOrganizer": that.form.author,
      //     "enrolledNumber": null,
      //     "requestedNumber": that.form.num,
      //     "activityType": that.form.type,
      //     "activityPlace": that.form.place,
      //     "isActivityPicture": false,
      //       }]
      //     }),{
      //       headers: {token: that.$store.getters.getToken,"Content-Type": "application/json;charset=utf-8"}
      //     }
      // )
      //     .then(function (response) {
      //       if(response.data.success == true){
      //         alert("修改成功")
      //         that.$router.push('/firstpage')
      //       }
      //       else{
      //         alert("修改失败")
      //       }
      //       console.log(that)
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      this.$axios({
        'url':"/api/volunteer/activity/addActivity",
        'method':'POST',
        'data':formData,
        headers:{
          "token":this.$store.getters.getToken,
          'Content-Type':'multipart/form-data',
        }
      }).then((res)=>{
        if(res.data.success == true){
          alert("上传文件成功！")
        }
        else{
          alert("失败！")
        }
      })
    },
    handleChange(file, fileList) {
      console.log(this.form.fileList);
      this.form.fileList = fileList
      console.log(this.$refs.upload.uploadFiles);
      console.log(file);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
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
