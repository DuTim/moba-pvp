<!--
 * @Description: 
 * @Author: DuTim
 * @Date: 2020-01-29 20:43:13
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-31 22:39:15
 -->
<template>
  <div class="card p-3 bg-white mt-3">
    <div class="card-header d-flex ai-center pb-3">
      <i class="iconfont" :class="`icon-${icon} text-${color}`" ></i>
      <div class="fs-xl flex-1 px-2">{{title}}</div>
      <div class="fs-xxl" v-if="!plain">&gt;&gt;&gt;</div>
    </div>
    <div class="card-body pt-3">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    plain: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
    color:{type:String ,default: function() {
        return "primary";
      },}
  }
};
</script>
<style  lang="scss" >
@import "../assets/css/_variables.scss";
.card {
  .card-header {
    border-bottom: 1px solid $border-color;
  }
  border-bottom: 1px solid $border-color;
}
</style>