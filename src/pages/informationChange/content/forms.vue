<template>
  <div class="forms">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="昵称">
        <el-col class="place" :span="12">
          <el-input v-model="form.place" placeholder="请输入昵称"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.sexual" placeholder="请选择">
          <el-option
            v-for="item in sexual"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="生日">
        <el-col class="month" :span="6">
          <el-select v-model="form.month" placeholder="请选择">
            <el-option
              v-for="item in month"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col class="line" :span="1">月</el-col>
        <el-col class="date" :span="6">
          <el-select v-model="form.date" placeholder="请选择">
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
        <el-col class="place" :span="12">
          <el-input v-model="form.place" placeholder="请输入地点"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="宣言">
        <el-col class="declaration" :span="20">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="form.textarea">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="修改密码">
        <el-col class="place" :span="20">
          <el-input v-model="form.code" placeholder="请输入密码" show-password></el-input>
        </el-col>
      </el-form-item>
    </el-form>
    <el-row class="buttons">
      <el-button type="primary" plain @click="success">保存信息</el-button>
      <el-button type="info" plain @click="code">退出</el-button>
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
        sexual:'',
        month:'',
        date:'',
        place:'',
        textarea:'',
        code:'',
      },
    }
  },
  methods:{
    success(){
      alert("保存成功！")
    },
  }
}
</script>

<style scoped>
.forms{
  position:absolute;
  top:15%;
}
.buttons{
  left:15%;
}
</style>
