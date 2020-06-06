<template>
  <div class="login-container">
    <el-form
      :model="user"
      :rules="rules2"
      status-icon
      ref="user"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-page"
    >
      <h3 class="title">账号注册</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="user.name" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="user.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="user.password" auto-complete="off" placeholder="确认密码"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button
          type="primary"
          style="width:100%;"
          @click="handleSubmit"
          :loading="logining"
        >注册并登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import loginApis from "../api/loginApis";

export default {
  data() {
    return {
      //是否正在登录
      logining: false,
      //当前用户
      user: {
        name: "",
        password: ""
      },
      rules2: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      //是否记住密码
      checked: false
    };
  },
  methods: {
    //注册点击事件
    handleSubmit(event) {
      let self = this;
      self.$refs.user.validate(valid => {
        if (valid) {
          self.logining = true;
          loginApis.addUser(self.user).then(res => {
            if (res.data.data && res.data.data == true) {
              self.logining = false;
              sessionStorage.setItem("name", self.user.name);
              self.$router.push({ path: "/" });
            } else {
              self.$alert("未知的错误！", "info", {
                confirmButtonText: "ok"
              });
            }
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.login-container {
  width: 100%;
  height: 100%;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>