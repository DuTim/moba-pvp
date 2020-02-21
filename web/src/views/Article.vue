<!--
 * @Description: 
 * @Author: DuTim
 * @Date: 2020-01-31 13:15:01
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-02-02 20:58:36
 -->
<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-cheronleft text-blue"></div>
      <div class="flex-1 text-ellipsis text-blue pl-2">{{model.title}}</div>
      <div class="text-grey">2020-01-31</div>
    </div>
    <div v-html="model.body" class="px-3 article-body fs-lg"></div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-menu"></i>
        <strong class="text-blue fs-lg ml-2">相关资讯</strong>
      </div>
      <div class="pt-2">
        <router-link
          class="py-2"
          tag="div"
          :to="`/articles/${item._id}` "
          v-for="(item, index) in model.related"
          :key="index"
        >{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.fetch();
  },
  watch: {
    id(){
      this.fetch()
    }
    },
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
    }
  }
};
</script>
<style lang="scss">
.article-body {
  margin-left: 50px;
  img {
    max-width: 100%;
    height: auto;

  }
}
</style>
