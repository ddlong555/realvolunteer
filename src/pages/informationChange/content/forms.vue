<template>
  <div class="forms">
    <div class="form-upload">
      <span>上传头像</span>
      <van-uploader v-model="form.fileList" multiple :max-count="1" :after-read="afterRead"/>
    </div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="昵称">
        <el-col class="nickname" :span="20">
          <el-input v-model="form.nickname" placeholder="" clearable></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.sexual" placeholder="" clearable>
          <el-option
            v-for="item in sexual"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="生日">
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
      <el-form-item label="地点">
        <el-col class="place" :span="20">
          <el-input v-model="form.place" placeholder="" clearable></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="专业">
        <el-col class="major" :span="20" clearable>
          <el-input v-model="form.major" placeholder="" clearable></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="宣言" >
        <el-col class="declaration" :span="20">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="form.textarea"
            maxlength="50"
            show-word-limit
            clearable>
          </el-input>
        </el-col>
      </el-form-item>
    </el-form>
    <el-row class="buttons">
      <el-button type="primary" plain @click="success">保存信息</el-button>
      <el-button type="info" plain @click="code">重置</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "forms",
  data(){
    return{
      sexual:[{
          value:'boy',
          label:'男'
        },{
          value:'girl',
          label:'女'
        }],
      month:[{
        value:'1',
        label:'1'
      },{
          value:'2',
          label:'2'
        },{
          value:'3',
          label:'3'
        },{
        value:'4',
        label:'4'
      },{
        value:'5',
        label:'5'
      },{
        value:'6',
        label:'6'
      },{
        value:'7',
        label:'7'
      },{
        value:'8',
        label:'8'
      },{
        value:'9',
        label:'9'
      },{
        value:'10',
        label:'10'
      },{
        value:'11',
        label:'11'
      },{
        value:'12',
        label:'12'
      },],
      date:[{
        value:'1',
        label:'1'
      },{
        value:'2',
        label:'2'
      },{
        value:'3',
        label:'3'
      },{
        value:'4',
        label:'4'
      },{
        value:'5',
        label:'5'
      },{
        value:'6',
        label:'6'
      },{
        value:'7',
        label:'7'
      },{
        value:'8',
        label:'8'
      },{
        value:'9',
        label:'9'
      },{
        value:'10',
        label:'10'
      },{
        value:'11',
        label:'11'
      },{
        value:'12',
        label:'12'
      },{
        value:'13',
        label:'13'
      },{
        value:'14',
        label:'13'
      },{
        value:'15',
        label:'15'
      },{
        value:'16',
        label:'16'
      },{
        value:'17',
        label:'17'
      },{
        value:'18',
        label:'18'
      },{
        value:'19',
        label:'19'
      },{
        value:'20',
        label:'20'
      },{
        value:'21',
        label:'21'
      },{
        value:'22',
        label:'22'
      },{
        value:'23',
        label:'23'
      },{
        value:'24',
        label:'24'
      },{
        value:'25',
        label:'25'
      },{
        value:'26',
        label:'26'
      },{
        value:'27',
        label:'27'
      },{
        value:'28',
        label:'28'
      },{
        value:'29',
        label:'29'
      },{
        value:'30',
        label:'30'
      },{
        value:'31',
        label:'31'
      },],
      form:{
        nickname:'',
        sexual:'',
        month:'',
        date:'',
        place:'',
        major:'',
        textarea:'',
        fileList:[],
        file:"",
      },
    }
  },
  methods:{
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.form.file = file;
    },
    success(){
      // console.log(this.form.file)
      var that = this;
      let dat = new Date(that.form.month + ' ' + that.form.date + ',2000');
      let file = this.form.file;
      let formData = new FormData();
      formData.append("headPicture",file.file);
      // var params = new URLSearchParams();
      // params.append('birthday',dat);
      this.$axios.post("/api/volunteer/userInfo/updateUserInfoByUserId",JSON.stringify({
            "userName":that.form.nickname,
            "priority":null,
            "gender":that.form.sexual,
            "mailaddress":null,
            "headPicture":null,
            "introduction":that.form.textarea,
            "address":that.form.place,
            "major":that.form.major,
            "birthday": dat,
            "fax":null,
            "qq":null,
            "tel":null,
            "credits":0
      }),{
        headers: {token: that.$store.getters.getToken,"Content-Type": "application/json;charset=utf-8"}
      }
      )
          .then(function (response) {
            if(response.data.success == true){
              alert("修改成功")
              that.$router.push('/personalInformation')
            }
            else{
              alert("修改失败")
            }
            console.log(that)
          })
          .catch(function (error) {
            console.log(error);
          });
      this.$axios({
        'url':"/api/volunteer/userInfo/updateHeadPicture",
        'method':'POST',
        'data':formData,
        headers:{
          "token":this.$store.getters.getToken,
          'Content-Type':'multipart/form-data',
        }
      }).then((res)=>{
        if(res.data.success == true){
          alert("上传头像成功！")
        }
        else{
          alert("头像失败！")
        }
      });
    },
    code() {
      location.reload()
    }
  }
}
</script>

<style scoped>
.forms{
  position:absolute;
  width: 100%;
  top:15%;
  left: 0%;
}
.buttons{
  left:22%;
}
</style>
