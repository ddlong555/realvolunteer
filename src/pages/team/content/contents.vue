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
        <el-col class="month" :span="8">
          <el-select v-model="form.month" placeholder="" clearable>
            <el-option
                v-for="item in month"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col class="line" :span="2">月</el-col>
        <el-col class="date" :span="8">
          <el-select v-model="form.date" placeholder="" clearable>
            <el-option
                v-for="item in date"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col class="line" :span="1">日</el-col>
      </el-form-item>
      <el-form-item label="报名人数">
        <el-input v-model="form.num" placeholder="请输入报名人数"></el-input>
      </el-form-item>
      <el-form-item label="活动地点">
        <el-input v-model="form.place" placeholder="请输入活动地点"></el-input>
      </el-form-item>
      <el-form-item label="活动内容">
        <el-col class="declaration" :span="150">
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
          :on-change="handleChange1"
          :on-remove="handleRemove1"
          :limit="3"
          multiple
          :file-list="form.fileList"
          :auto-upload="false">
        <el-button type="info" plain @click="upload">上传文件</el-button>
        <div slot="tip" class="el-upload__tip">不能超过三个文件</div>
      </el-upload>
      <el-upload
          class="upload-demo"
          ref="upload"
          action="#"
          :on-change="handleChange2"
          :on-remove="handleRemove2"
          :limit="3"
          multiple
          :file-list="form.picList"
          :auto-upload="false">
        <el-button type="info" plain @click="upload">上传图片</el-button>
        <div slot="tip" class="el-upload__tip">不能超过三个文件</div>
      </el-upload>
      <el-button type="primary" plain @click="submit">提交信息</el-button>
    </el-row>
  </div>
</template>


<script>
export default {
  name: "contents",
  data() {
    return {
      month: [{
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4'
      }, {
        value: '5',
        label: '5'
      }, {
        value: '6',
        label: '6'
      }, {
        value: '7',
        label: '7'
      }, {
        value: '8',
        label: '8'
      }, {
        value: '9',
        label: '9'
      }, {
        value: '10',
        label: '10'
      }, {
        value: '11',
        label: '11'
      }, {
        value: '12',
        label: '12'
      },],
      date: [{
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4'
      }, {
        value: '5',
        label: '5'
      }, {
        value: '6',
        label: '6'
      }, {
        value: '7',
        label: '7'
      }, {
        value: '8',
        label: '8'
      }, {
        value: '9',
        label: '9'
      }, {
        value: '10',
        label: '10'
      }, {
        value: '11',
        label: '11'
      }, {
        value: '12',
        label: '12'
      }, {
        value: '13',
        label: '13'
      }, {
        value: '14',
        label: '13'
      }, {
        value: '15',
        label: '15'
      }, {
        value: '16',
        label: '16'
      }, {
        value: '17',
        label: '17'
      }, {
        value: '18',
        label: '18'
      }, {
        value: '19',
        label: '19'
      }, {
        value: '20',
        label: '20'
      }, {
        value: '21',
        label: '21'
      }, {
        value: '22',
        label: '22'
      }, {
        value: '23',
        label: '23'
      }, {
        value: '24',
        label: '24'
      }, {
        value: '25',
        label: '25'
      }, {
        value: '26',
        label: '26'
      }, {
        value: '27',
        label: '27'
      }, {
        value: '28',
        label: '28'
      }, {
        value: '29',
        label: '29'
      }, {
        value: '30',
        label: '30'
      }, {
        value: '31',
        label: '31'
      },],
      form: {
        name: '',
        type: '',
        date: '',
        month: '',
        num: 0,
        place: '',
        textarea: '',
        fileList: [],
        picList: [],
      },
      activityClass:{
        activityName:"活动名字",
        activityContent:"活动内容",
        requestedNumber:0,
        activityType:"援助",
        activityPlace:"上海",
        activityDate:""
      }
    }
  },
  methods: {
    upload() {
      console.log(this.$store.getters.getUser.userId);
    },
    submit() {
      console.log(this.$store.getters.getToken)
      var that = this;
      let formData = new FormData();
      if(that.form.month==''){
        that.form.month=new Date().getMonth()+1;
      }
      if(that.form.date==''){
        that.form.date=new Date().getDate();
      }
      formData.append("activityName",that.form.name);
      formData.append("activityContent",that.form.textarea);
      formData.append("requestedNumber",that.form.num);
      formData.append("activityType",that.form.type);
      formData.append("activityPlace",that.form.place);
      formData.append("activityDate","2021-"+that.form.month+"-"+that.form.date);
      // that.$refs.upload.uploadFiles.map((item)=> {
      //   formData.append("signFileModel", item.raw,item.name);
      // })
      that.form.fileList.map((item) => {
        formData.append("uploadSignFileModel", item.raw);
      })
      that.form.picList.map((item) => {
        formData.append(" uploadActivityPicture", item.raw);
      })
      this.$axios({
        'url': "/api/volunteer/activity/addActivity",
        'method': 'POST',
        'data': formData,
        headers: {
          "token": this.$store.getters.getToken,
          'Content-Type': 'multipart/form-data',
        }
      }).then((res) => {
        console.log(res);
        if (res.data.success == true) {
          alert("上传文件成功！")
          console.log(formData);
        } else {
          alert("失败！")
        }
      })

    },
    handleChange1(file, fileList) {
      // console.log(this.form.fileList);
      this.form.fileList = fileList
      // console.log(this.$refs.upload.uploadFiles);
      // console.log(file);
    },
    handleRemove1(file, fileList) {
      console.log(file, fileList);
    },
    handleChange2(file, picList) {
      // console.log(this.form.fileList);
      this.form.picList = picList
      // console.log(this.$refs.upload.uploadFiles);
      // console.log(file);
    },
    handleRemove2(file, picList) {
      console.log(file, picList);
    },
  }
}
</script>

<style scoped>
.contents {
  position: absolute;
  top: 10%;
  left: 5%;
}

.buttons {
  position: absolute;
  left: 20%;
}
</style>
