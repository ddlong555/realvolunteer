<template>
  <div class="pages">
    <top2 title=""></top2>
    <div style="height: 50px"></div>
    <div class="vadioBox" v-show="videoSrc == ''">
      <van-uploader
        ref="upload"
        :after-read="afterRead"
        :uploadIcon="require('@/assets/image/activity/vadio.svg')"
        upload-text="上传视频"
        accept="video/*"
      />
    </div>
    <div class="vadioBox" v-show="videoSrc != ''">
      <div class="tag" @click="checkVadio">
        <van-tag type="primary">修改视频</van-tag>
      </div>
      <video class="video" :src="videoSrc" controls="controls"></video>
    </div>

    <van-field
      v-model="titles"
      rows="2"
      autosize
      label="标题*"
      type="textarea"
      maxlength="40"
      placeholder="请填写标题"
      show-word-limit
    />
<!--    <van-cell title="标签*" is-link @click="selTag" :value="tags" />-->
    <van-popup v-model="tagShow" position="bottom" round>
      <div class="tagBtn">
        <van-button type="primary" size="small" @click="saveTag"
          >确 定</van-button
        >
      </div>
      <div class="bottomTag">
        <van-tag
          type="primary"
          v-for="(item, index) in tagData"
          :key="index"
          :plain="item.check ? false : true"
          :color="item.check ? '#1989fa' : '#666'"
          @click="item.check = !item.check"
          >{{ item.name }}</van-tag
        >
      </div>
    </van-popup>
    <van-field
      v-model="content"
      rows="6"
      autosize
      label="发表动态"
      type="textarea"
      maxlength="140"
      placeholder="请填写动态内容"
      show-word-limit
    />
    <div class="sendBtn">
      <van-button type="info" round @click="send">发 布</van-button>
<!--      <van-button type="info" round plain>存草稿</van-button>-->
    </div>
  </div>
</template>

<script>
// import qs from "qs"
import top2 from "@/pages/upload/content/top2";
export default {
  components: {
    top2
  },
  name: "score",
  data() {
    return {
      videoSrc: "",
      titles: "", //标题
      content: "", //内容
      tags: "", //标签
      tagData: [], //标签数据
      tagShow: false, //底部弹出显示
    };
  },
  mounted() {
    document.title = "发布";
    for (var i = 0; i < 20; i++) {
      this.tagData.push({ name: "标签" + i, check: false });
    }
  },
  watch: {
    tagShow() {
      this.tags = "";
      this.tagData.forEach((v) => {
        if (v.check) {
          this.tags = this.tags + v.name + ",";
        }
      });
    },
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.videoSrc = file.file;
    },
    checkVadio() {
      this.$refs.upload.chooseFile();
    },
    selTag() {
      this.tagShow = true;
    },
    saveTag() {
      this.tagShow = false;
    },
    send() {
      let file=this.videoSrc
      let formData = new FormData();
      formData.append('videoText',this.content)
      formData.append('videoTitle',this.titles)
      formData.append('video_mp4',file)
      this.$axios({
        'url': "/api/volunteer/video/addVideo",
        'method': 'POST',
        'data': formData,
        headers: {
          "token": this.$store.getters.getToken,
          'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryVCFSAonTuDbVCoAN',
        }
      }).then((res)=>{
          alert("上传成功")
          console.log(res)
        });
      // this.$axios.post("/api/volunteer/video/addVideo", qs.stringify({
      //    "videoTitle": this.titles,
      //    "videoText":this.content,
      //    "video_mp4": this.videoSrc,
      //  }),
      //      {
      //        headers:{
      //          token:this.$store.getters.getToken,
      //          "content-type":"multipart/form-data"
      //        }
      //      })
      //      .then(function (response) {
      //        console.log(response);
      //      })
      //      .catch(function (error) {
      //        console.log(error);
      //      });
      //  console.log(this.titles)
      //  console.log(this.content)
      //  console.log(this.$store.getters.getToken)

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
.tag {
  position: absolute;
  bottom: 30px;
  right: 20px;
  z-index: 9;
  span {
    width: 60px;
    height: 40px;
  }
}
.tagBtn {
  text-align: right;
  padding: 10px 10px 0 0;
  border: 1px solid #e5e5ee;
  padding-bottom: 10px;
  &/deep/ button {
    padding: 0 15px;
  }
}
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
  height: 220px;
}

/deep/ .van-uploader__upload {
  width: 100%;
  margin: 0;
  height: 220px;
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
