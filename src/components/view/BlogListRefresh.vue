<template></template>
<script>
export default {
  name: "blogListRefresh",
  mounted() {
    this.$router.push({ path: "/userBlogs" });
  }
};
</script>