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
          <blogDetail v-show="showDetail" :details="details"></blogDetail>
          <blogList
            v-show="showList"
            :blogs="blogs"
            :editAble="true"
            @sendDetail="sendDetail($event)"
          ></blogList>
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
import blogList from "@/components/view/BlogList";
import blogDetail from "@/components/view/BlogDetail";
import blogApis from "../api/blogApis";

export default {
  name: "userBlogs",
  components: {
    myFooter,
    myHeader,
    myAside,
    blogList,
    blogDetail
  },
  data() {
    return {
      blogs: [],
      showDetail: false,
      showList: true,
      details: {}
    };
  },
  mounted() {
    let self = this;
    blogApis.getMyBlogs("1111").then(res => {
      if (200 == res.status) {
        self.blogs = res.data.data;
      }
    });
  },
  methods: {
    sendDetail(row) {
      let self = this;
      self.details = row;
      self.showDetail = true;
      self.showList = false;
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
</style>