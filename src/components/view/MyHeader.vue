<template>
  <div style="text-align: right; font-size: 15px">
    <el-dropdown @command="handleCommand">
      <i class="el-icon-user-solid" style="margin-right: 15px;"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="login">登录</el-dropdown-item>
        <el-dropdown-item command="logout">注销</el-dropdown-item>
        <el-dropdown-item command="registered">注册</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span v-if="logged">{{name}}</span>
  </div>
</template>
<script>
export default {
  name: "myHeader",
  data() {
    return {
      //当前用户
      name: null,
      logged: false
    };
  },
  created: function() {
    let self = this;
    let currentUsername = sessionStorage.getItem("name");
    if (currentUsername) {
      self.logged = true;
      self.name = currentUsername;
    }
  },
  methods: {
    handleCommand(command) {
      if (command == "login") {
        this.$router.push({ path: "/login" });
      } else if (command == "logout") {
        this.$router.push({ path: "/" });
      } else {
        this.$router.push({ path: "/registered" });
      }
    }
  }
};
</script>
