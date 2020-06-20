<template>
  <div>
    <h1>
      <el-input v-model="details.title"></el-input>
    </h1>
    <div v-html="details.content" style="text-align:left;"></div>
  </div>
</template>
<script>
export default {
  name: "blogDetail",
  props: ["details"]
};
</script>