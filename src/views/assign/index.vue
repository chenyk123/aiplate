<template>
<div>
  <header-top></header-top>
  <br>
  <el-row class="tac">
    <el-col :span="10">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="usrname">
          <el-input type="text" v-model="ruleForm.usrname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off">></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</div>
</template>
<script>
import HeaderTop from '../../components/headerTop.vue'
  export default {
     components:{
        HeaderTop
    },
    data() {
      var checkusrname = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else{
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          console.log("value:" ,value ,"pass:",this.ruleForm.pass);
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
          ruleForm: {
          usrname:'',
          pass: '',
          checkPass: '',
        },
        rules: {
          usrname: [
            { validator: checkusrname, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]   
        }
      };
    },
    methods: {
          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                alert('提交注册');
                this.$router.push('login')
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          }
    }
   }
</script>
<style lang="scss" scoped>

</style>