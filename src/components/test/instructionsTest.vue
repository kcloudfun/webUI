<template>
  <div>
    <ul>
      <!-- 写在本级而不是父级 -->
      <li v-for="(item,index) in testList" :key="index">{{item.name1}} - {{item.age}}</li>
      <!-- vue文档规定使用v-for后最好给它绑定一个key,所以你再写个:key="your codes"即可 -->

      <button v-on:click="dosome">点击一下</button>
      <!-- v-on: 可简写为@ -->
      <!-- v-bind绑定属性 v-on绑定事件 -->
    </ul>
    <p>{{name2}}</p>

    <p v-if="case1">v-if</p>
    <!-- v-show只是隐藏，dom元素还在，v-if是彻底不存在-->
    <p v-show="case2">v-show</p>

    <!-- 事件的修改器 -->
    <input @keydown.enter="keyDown"/>
  </div>
</template>
<script>
export default {
  name: "instructionsTest",
  data() {
    return {
      testList: [{ name1: "likai", age: 18 }, { name1: "李思", age: 20 }],
      name2: "111",
      case1: true,
      case2: false
    };
  },
  methods: {
    dosome() {
      console.log("1111");
    },
    keyDown() {
      console.log("13424");
    }
  }
};
</script>
