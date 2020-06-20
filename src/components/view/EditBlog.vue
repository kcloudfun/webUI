<template>
  <div>
    <h1>
      <el-input @change="titleChange()" v-model="blog.title" placeholder="请输入标题"></el-input>
    </h1>
    <div id="wangeditor">
      <div ref="editorElem" style="text-align:left;"></div>
    </div>
    <div style="text-align:left;margin-top: 20px;">
      学科类型：
      <el-radio-group v-model="radio" @change="typeChange">
        <el-radio :label="1">Java</el-radio>
        <el-radio :label="2">Python</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>
<script>
import E from "wangeditor";
export default {
  name: "editBlog",

  data() {
    return {
      editor: null,
      radio: null,
      blog: {
        editorContent: "",
        title: "",
        type: ""
      }
    };
  },

  // catchData是一个类似回调函数，来自父组件，当然也可以自己写一个函数，主要是用来获取富文本编辑器中的html内容用来传递给服务端
  props: {
    initData: {
      type: Object,
      required: true
    }
  }, // 接收父组件的方法

  methods: {
    titleChange() {
      this.$emit("catchData", this.blog);
    },
    typeChange() {
      if (this.radio == "1") {
        this.blog.type = "Java";
      } else {
        this.blog.type = "Python";
      }
      this.$emit("catchData", this.blog);
    }
  },

  mounted() {
    this.editor = new E(this.$refs.editorElem);
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.onchange = html => {
      this.blog.editorContent = html;
      //发送数据给父组件
      this.$emit("catchData", this.blog);
    };
    //菜单配置
    this.editor.customConfig.menus = [
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      //   "image", // 插入图片
      "table", // 表格
      "code", // 插入代码
      "undo", // 撤销
      "redo" // 重复
    ];
    this.editor.create(); // 创建富文本实例
  }
};
</script>