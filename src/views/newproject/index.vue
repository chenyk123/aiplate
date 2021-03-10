<template>
<div>
  <header-top></header-top>
  <br>
  <el-row class="tac">
    <el-col :span="10">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="项目名" prop="projectname">
          <el-input type="text" v-model="ruleForm.projectname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="项目经理" prop="usrname">
          <el-input type="password" v-model="ruleForm.usrname" autocomplete="off"></el-input>
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
          return callback(new Error('项目名不能为空'));
        }else{
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入项目经理'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
          ruleForm: {
          projectname:'',
          usrname: '',
        },
        rules: {
          usrname: [
            { validator: checkusrname, trigger: 'blur' }
          ],
          projectname: [
            { validator: validatePass, trigger: 'blur' }
          ] 
        }
      };
    },
    methods: {
          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                alert('提交？');
                this.$router.push('/home')
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