<template>
  <div class="contents">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="团队姓名">
          <el-input v-model="form.name" placeholder="请输入团队姓名"></el-input>
      </el-form-item>
      <el-form-item label="创建时间">
          <el-input v-model="form.time" placeholder="请输入创建时间"></el-input>
      </el-form-item>
      <el-form-item label="创建者">
          <el-input v-model="form.author" placeholder="请输入创建者"></el-input>
      </el-form-item>
      <el-form-item label="地点">
          <el-input v-model="form.place" placeholder="请输入地点"></el-input>
      </el-form-item>
      <el-form-item label="宣言">
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
      <el-button type="primary" plain @click="submit">提交信息</el-button>
      <el-button type="info" plain @click="success">保存信息</el-button>
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
        time:'',
        author:'',
        place:'',
        textarea:''
      },
    }
  },
  methods:{
    success(){
      alert("保存成功！")
    },
    submit(){
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
