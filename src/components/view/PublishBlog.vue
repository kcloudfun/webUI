<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <myAside></myAside>
      </el-aside>

      <el-container>
        <el-header>
          <myHeader></myHeader>
        </el-header>

        <el-main>
          <editBlog @catchData="catchData($event)" :initData="blog"></editBlog>
          <div>
            <el-button class="publishBtn" @click="publish" type="info" round>立即发布</el-button>
          </div>
        </el-main>

        <el-footer>
          <myFooter></myFooter>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import myFooter from "@/components/view/MyFooter";
import myHeader from "@/components/view/MyHeader";
import myAside from "@/components/view/MyAside";
import editBlog from "@/components/view/EditBlog";
import blogApis from "../api/blogApis";

export default {
  name: "publishBlog",
  components: {
    myFooter,
    myHeader,
    myAside,
    editBlog
  },
  data() {
    return {
      blog: {
        title: "",
        content: ""
      }
    };
  },
  methods: {
    //接收子组件内容并赋值
    catchData(el) {
      let self = this;
      self.blog.title = el.title;
      self.blog.content = el.editorContent;
    },
    publish(event) {
      let self = this;
      blogApis.addBlog(self.blog).then(res => {
        console.log("请求成功")
      })
    }
  }
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-row {
  margin-bottom: 20px;
}

.publishBtn {
  margin-bottom: 100px;
  margin-top: 80px;
}
</style>