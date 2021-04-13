<template>
  <div class="pages">
    <top2 title=""></top2>
    <div style="height: 50px"></div>
<!--    <van-field-->
<!--      v-model="titles"-->
<!--      rows="2"-->
<!--      autosize-->
<!--      label="标题*"-->
<!--      type="textarea"-->
<!--      maxlength="80"-->
<!--      placeholder="请填写标题"-->
<!--      show-word-limit-->
<!--    />-->
    <van-field
      v-model="content"
      rows="8"
      autosize
      label="发表动态"
      type="textarea"
      maxlength="300"
      placeholder="请填写动态内容"
      show-word-limit
    />

    <van-uploader
        v-model="fileList"
        multiple
        :disabled='active==0'
        :max-count="4"
        :after-read="afterRead"
    />
    <div class="sendBtn">
      <van-button type="info" round @click="send">发 布</van-button>
      <van-button type="info" round plain>存草稿</van-button>
    </div>
  </div>
</template>

<script>
import top2 from "./content/top2"

export default {
  components: {
    top2
  },
  name: "score",
  data() {
    return {
      picSrc: "",
      content: "",
      fileList:[],
      active:1,
    };
  },
  mounted() {
    document.title = "发布";
  },
  // watch: {
  //   tagShow() {
  //     this.tags = "";
  //     this.tagData.forEach((v) => {
  //       if (v.check) {
  //         this.tags = this.tags + v.name + ",";
  //       }
  //     });
  //   },
  // },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.picSrc = file;
    },
    checkVadio() {
      this.$refs.upload.chooseFile();
    },
    // selTag() {
    //   this.tagShow = true;
    // },
    // saveTag() {
    //   this.tagShow = false;
    // },
    send() {
      let file=this.fileList;
      let deviceFile = []  //选择的图片数组
      let formData = new FormData();
      if(Array.isArray(file)){ //因为该组件单选是对象，多选是数组
        deviceFile = file
      }else{
        deviceFile.push(file)
      }
      deviceFile.map((item)=>{
        //files是后台参数name字段对应值
        formData.append('commentPicture', item.file);
      })
      formData.append('commentText',this.content)
       this.$axios({
         'url':"/api/volunteer/comment/addComment",
       'method':'POST',
         'data':formData,
         headers:{
           "token":this.$store.getters.getToken,
          'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundaryVCFSAonTuDbVCoAN',
        }
      }).then((res)=>{
        alert("上传成功")
         console.log(res)
       });

      // // this.$axios.post("/api/volunteer/user/signUpByTel", qs.stringify({
      //   "commentText": this.content,
      //   "commentPublisher":this.,
      //   "commentLike":this.,
      // }),)
      //     .then(function (response) {
      //       console.log(response);
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
    },
  },
};
</script>

<style lang="scss" scoped>
.vadioBox {
  width: 100%;
  height: 220px;
  position: relative;
  video {
    max-height: 220px;
    width: 100%;
  }
}
//.tag {
//  position: absolute;
//  bottom: 30px;
//  right: 20px;
//  z-index: 9;
//  span {
//    width: 60px;
//    height: 40px;
//  }
//}
//.tagBtn {
//  text-align: right;
//  padding: 10px 10px 0 0;
//  border: 1px solid #e5e5ee;
//  padding-bottom: 10px;
//  &/deep/ button {
//    padding: 0 15px;
//  }
//}
.bottomTag {
  padding: 15px;
  text-align: center;
}
.sendBtn {
  text-align: center;
  margin-top: 20px;
  padding-bottom: 50px;
  button {
    width: 90%;
    margin-bottom: 15px;
  }
}
/deep/ .van-uploader {
  width: 100%;
  padding: 0 10px;
  background: #ffffff;
  margin-top: 10px;
//  height: 220px;
}

///deep/ .van-uploader__upload {
//  width: 100%;
//  margin: 0;
//  height: 220px;
//}

/deep/ .van-uploader__wrapper{
  margin-top: 10px;

}

/deep/ .van-uploader__upload-icon {
  font-size: 42px;
}
/deep/ .van-tag {
  width: 15%;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 1% 10px 1%;
}
</style>
