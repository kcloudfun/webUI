<template>
  <div>
    <el-page-header @back="goBack" content="博客详情"></el-page-header>
    <h1>
      <div v-text="details.title"></div>
    </h1>
    <div v-html="details.content" style="text-align:left;"></div>
  </div>
</template>
<script>
export default {
  name: "blogDetail",
  props: ["details"],
  methods: {
    goBack() {
      this.$router.push({ path: "/blogListRefresh" });
    }
  }
};
</script>