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
      <h3 class="title">系统登录</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="user.account" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="user.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
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
        account: "",
        password: ""
      },
      rules2: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    //登录点击事件
    handleSubmit(event) {
      let self = this;
      this.$refs.user.validate(valid => {
        if (valid) {
          this.logining = true;
          loginApis.loginPost(self.user).then(res => {
            console.log(res);
            if (res.data.code && res.data.code == "S99999") {
              this.logining = false;
              sessionStorage.setItem("user", this.user.account);
              this.$router.push({ path: "/" });
            } else if (res.data.code && res.data.code == "F00001") {
              this.logining = false;
              this.$alert("登录失败，请输入正确的账号和密码！", "提示", {
                confirmButtonText: "ok"
              });
            } else {
              this.$alert("未知的错误！", "info", {
                confirmButtonText: "ok"
              });
            }
          });
        } else {
          console.log("error submit!");
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
