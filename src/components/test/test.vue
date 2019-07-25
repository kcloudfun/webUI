<template>
    <instructionsTest></instructionsTest>
</template>
<script>
import baseTest from "@/components/test/baseTest.vue";
import instructionsTest from "@/components/test/instructionsTest.vue";//导包时可以省略.vue，系统会依次根据名称去匹配.js以及.vue
export default {
  name: "test",
  components: {
    baseTest,
    instructionsTest
  }
};
</script>
