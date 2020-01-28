<!--
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 14:39:24
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-27 20:32:35
 -->
<template>
  <div>
    <h1 class>{{id ? '编辑':'新建'}}管理员</h1>
    <hr />
    <el-form label-width="120px" @submit.native.prevent="save">
  
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
         <el-form-item label="密码">
        <el-input v-model="model.password" ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  created() {
    this.id && this.fetch();

  },
  props: { id: {} },
  data() {
    return {
      model: {},
   
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/admin_user/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/admin_user/", this.model);
      }
      global.console.log(res);

      this.$router.push("/admin_users/list");

      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/admin_users/${this.id}`);
      this.model = res.data;
    },

  }
};
</script>
<style lang="css">
.h1-category {
  float: left;
  height: 45px;
}
</style>
