<template>
  <div>
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
          <el-button size="mini" @click="handleQuery(scope.$index, scope.row)">查看</el-button>
          <el-button
            v-if="editAble"
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>确定删除该博客及博客下的评论吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="toDelete">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import blogApis from "../api/blogApis";

export default {
  data() {
    return {
      tableData: [],
      centerDialogVisible: false,
      deleteId: null
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
    handleQuery(index, row) {
      this.$emit("sendDetail", row);
    },
    handleDelete(index, row) {
      let self = this;
      self.centerDialogVisible = true;
      self.deleteId = row.id;
    },
    toDelete() {
      let self = this;
      blogApis.deleteBlog(self.deleteId).then(res => {
        self.centerDialogVisible = false;
        self.deleteId = null;
        this.$router.push({ path: "/blogListRefresh" });
      });
    }
  }
};
</script>