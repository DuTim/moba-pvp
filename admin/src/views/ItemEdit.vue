<!--
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 14:39:24
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-02-03 21:10:09
 -->
<template>
  <div>
    <h1 class>{{id ? '编辑':'新建'}}物品</h1>
    <hr />
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="uploadurl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
      model: {
        icon: ""
      }
    };
  },
  methods: {
    afterUpload(res) {
      console.log(res.url);
      this.$set(this.model, "icon", res.url);
      // this.model.icon=res.url;
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/items/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/items/", this.model);
      }
      global.console.log(res);

      this.$router.push("/items/list");

      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/items/${this.id}`);
      this.model = res.data;
    }
  }
};
</script>
<style lang="css">
</style>
