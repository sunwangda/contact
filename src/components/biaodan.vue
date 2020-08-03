<template>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="50px" class="demo-ruleForm">
  <el-form-item label="name" prop="name" >
    <el-input type="" v-model="ruleForm.name" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="phone" prop="phone">
    <el-input type="" v-model="ruleForm.phone" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
    <el-button @click="goback">返回</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import * as index from '@/api/index.js'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入name'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('phone');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        
          callback();
        
      };
      return {
        ruleForm: {
          name: '',
          phone: '',
        },
        rules: {
          name: [
            { validator: validatePass, trigger: 'blur' }
          ],
          phone: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              index.addData(this.ruleForm).then(res => {
                        console.log(res)
                        this.userData = res.data
                        
                    })
            alert('success!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      goback() {
          const vm = this;
            vm.$router.push({name: 'HelloWorld'})
      }
    }
  }
</script>