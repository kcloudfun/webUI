<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <myAside></myAside>
      </el-aside>

      <el-container>
        <el-main>
          <div>
            <iframe :src="url" id="adminSwagger2Iframe" frameborder="0"></iframe>
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

export default {
  name: "description",
  components: {
    myFooter,
    myHeader,
    myAside
  },
  data() {
    return {
      url: "http://localhost:8001/swagger-ui.html#/"
    };
  },
  mounted() {
    /**
     * iframe-宽高自适应显示
     */
    const oIframe = document.getElementById("adminSwagger2Iframe");
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = Number(deviceWidth) - 260 + "px"; //数字是页面布局宽度差值
    oIframe.style.height = Number(deviceHeight) - 120 + "px"; //数字是页面布局高度差
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