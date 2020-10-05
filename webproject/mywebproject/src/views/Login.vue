<template>
  <div class="login-box">
    <h2 class="login-title">账户登录</h2>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">登录</el-button>
        <el-button>注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        form:{
          name: '',
          password: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods:{
      onSubmit(formName){
        this.$refs[formName].validate((valid) => {
          if(valid){
            alert('submit!');
          } else {
            this.$message.error('请输入用户名或密码！');
            return false;
          }
        });
      }
    }
  }
</script>

<style>
  .login-box{
    width: 400px;
    height: 300px;
    margin: 150px auto;
    border: 1px solid #DCDFE6;
    border-radius: 20px;
    box-shadow: 0px 0px 20px #DCDFE6;
    padding: 20px 50px 20px 30px;
  }
  .login-title{
    text-align: center;
    padding: 20px;
  }
</style>
