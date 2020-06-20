<template>
  <el-table :data="blogs" style="width: 100%">
    <el-table-column prop="title" label="标题"></el-table-column>
    <el-table-column prop="writerId" label="作者" width="180"></el-table-column>
    <el-table-column prop="createTime" label="发布时间" width="180"></el-table-column>
    <el-table-column prop="type" label="分类">
      <template slot-scope="scope">
        <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'">{{scope.row.type}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
        <el-button
          v-if="editAble"
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  props: {
    blogs: {
      type: Array
    },
    editAble: {
      type: Boolean
    }
  },
  methods: {
    //接收子组件内容并赋值
    handleEdit(index, row) {
      this.$emit("sendDetail", row);
    },
    publish(event) {
      let self = this;
      blogApis.addBlog(self.blog).then(res => {
        console.log("请求成功");
      });
    }
  }
};
</script>