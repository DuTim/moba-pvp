<!--
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 14:39:24
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-27 17:23:46
 -->
<template>
  <div>
    <h1>分类列表</h1>
    <el-main>
      <el-table :data="items">
        <el-table-column prop="_id" label="ID" width="220"></el-table-column>
        <!-- <el-table-column prop="parent.name" label="上级分类" width="140"></el-table-column> -->
        
        <el-table-column prop="title" label="文章标题" width="140"></el-table-column>

        <el-table-column fixed="right" label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              @click="$router.push(`/articles/edit/${scope.row._id}`)"
            >编辑</el-button>
            <el-button type="primary" size="small" @click="remove(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>
<script>
export default {
  created() {
    this.fetch();
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/articles");
      // console.log(res);

      this.items = res.data;
    },
    async remove(row) {
      this.$confirm(`是否确认删除文章? ${row.title}`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
      await this.$http.delete(`rest/articles/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    }
  }
};
</script>
