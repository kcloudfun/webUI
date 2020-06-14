<template>
  <div>
    <el-menu :default-openeds="['1', '3']" @select="handleSelect">
      <el-menu-item index="description">网站介绍</el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>Swagger2
        </template>
        <el-menu-item index="adminSwagger2">admin</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>博客广场
        </template>
        <el-menu-item index="adminSwagger2">Java</el-menu-item>
        <el-menu-item index="adminSwagger2">Python</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>我的信息
        </template>
        <el-menu-item index="adminSwagger2">基本信息</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>我的动态
        </template>
        <el-menu-item index="adminSwagger2">评论</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-menu"></i>博客管理
        </template>
        <el-menu-item index="userblogs">我的博客</el-menu-item>
        <el-menu-item index="publishBlog">发布博客</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "myAside",
  data() {
    return {
      isCollapse: false //菜单是否折叠
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      if (key == "description") {
        this.$router.push({ path: "/description" });
      } else if (key == "adminSwagger2") {
        this.$router.push({ path: "/adminSwagger2" });
      }else if (key == "publishBlog") {
        this.$router.push({ path: "/publishBlog" });
      }else if (key == "userblogs") {
        this.$router.push({ path: "/userblogs" });
      }
    }
  }
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
