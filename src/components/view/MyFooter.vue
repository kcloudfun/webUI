<template>
  <div style="width: 100%;">
    <div class="main-page-footer-icp-link">
      <el-link type="primary" href="http://www.beian.miit.gov.cn">{{ICP}}</el-link>
    </div>
    <div class="main-page-footer-company">©www.kcloud.fun 版权所有</div>
  </div>
</template>
<script>
export default {
  name: "bottom",
  data() {
    return {
      ICP: "鄂ICP备20002319号" //工信部备案号
    };
  }
};
</script>
<style>
.main-page-footer-company {
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.main-page-footer-icp-link {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
