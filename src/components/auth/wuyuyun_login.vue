<template>
    <el-form class="login-form"  :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
      <input type="text" name="x" style="width: 0px;position: absolute;height: 0px;">
      <el-form-item prop="name">
        <span class="svg-container">
          <svg-icon icon-class="user"></svg-icon>
        </span>
        <el-input type="text" v-model="ruleForm.name" auto-complete="off"  placeholder="用户名">
          <i class="el-icon-user-solid"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="checkbox">
          <Slider ></Slider>
        </div>
      </el-form-item>
      <el-form-item>
        <label  v-model="ruleForm.remember" style="position: absolute">
          <input type="checkbox"></input>
          <span>记住我</span>
        </label>
        <a href="javascript:;" class="login-form-forgot">忘记密码？</a>
        <button  class="login-form-button ant-btn ant-btn-primary"  style="margin-top: 10px">登录</button>
      </el-form-item>
    </el-form>
</template>

<script>
  import Slider from '../shared/slider.vue'
    export default {
        name: "wuyuyun_login",
      data(){
          let checkName = (rule,value,callback)=>{
            if (value === '') {
                callback(new Error("请输入用户名"))
            }
          };
         let validatePass = (rule,value,callback)=>{
           if(value === ''){
             callback(new Error("请输入密码"))
           }
         };
         return{
           ruleForm:{
             name: "",
              pass: "",
             remember: "",

           },
           rules:{
             name: [{ validator: checkName, trigger: 'change'}],
             pass: [{ validator: validatePass, trigger: 'change'}],
           }
         }
      },
      components:{
        Slider,
      }
    }
</script>

<style scoped lang="scss">
  .login-form {
    max-width: 300px;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 5px;
  }

  .login-form-forgot {
    float: right;
  }

  .login-form-button {
    width: 100%;
  }
  .ant-btn {
    line-height: 1.5;
    display: inline-block;
    font-weight: 400;
    cursor: pointer;
    background-image: none;
    border: 1px solid #d9d9d9;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    height: 32px;
    position: relative;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    white-space: nowrap;
    text-align: center;
    touch-action: manipulation;
  }
  .ant-btn-primary{
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
  }
</style>
