<template>
  <div>
    <div id="text1">{{text1}}</div>
    <div id="text2" :style="class1"></div>
    <!--2.0版本之后这里属性不能直接使用双大括号取值，必须要使用v-bind指令 -->

    <p v-html="text3"></p>
    <!-- 会编译html标签，有html标签话会呈现html标签渲染完之后的效果 -->
    <p v-text="text3"></p>
    <!-- 不会编译html标签，整体作字符串渲染 -->
    {{num+1}}
    <!-- 测试计算 -->
    {{status ? 'true':'false'}}
    <!-- 测试三元表达式 -->
  </div>
</template>
<script>
export default {
  name: "baseTest",
  data() {
    return {
      text1: "aaaa",
      text2: "bbbb",
      text3: "<span>ccc</span>",
      class1: "width:50px;height:90px;background:red;",
      num: 1,
      status: false
    };
  }
};
</script>
