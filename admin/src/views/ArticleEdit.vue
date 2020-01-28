<!--
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 14:39:24
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-27 19:31:47
 -->
<template>
  <div>
    <h1 class>{{id ? '编辑':'新建'}}文章</h1>
    <hr />
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="model.body"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor
  },
  created() {
    this.id && this.fetch();
    this.fetchCategories();
  },
  props: { id: {} },
  data() {
    return {
      model: {},
      categories: []
    };
  },
  methods: {
    //富文本编辑中的 imagehandle
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)
      const formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post("upload", formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/articles/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/articles/", this.model);
      }
      global.console.log(res);

      this.$router.push("/articles/list");

      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.id}`);
      this.model = res.data;
    },
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`);
      this.categories = res.data;
    }
  }
};
</script>
<style lang="css">
.h1-category {
  float: left;
  height: 45px;
}
</style>
