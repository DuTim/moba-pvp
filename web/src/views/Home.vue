<!--
 * @Description: 
 * @Author: DuTim
 * @Date: 2020-01-28 20:20:15
 * @LastEditors: Dutim
 * @LastEditTime: 2020-03-22 10:38:07
 -->
<template>
  <div class="home">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper-1.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper-2.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right mt-3 pb-2 pt-3" slot="pagination"></div>
    </swiper>
    <!-- end of  swiper -->
    <div class="nav-icons bg-white mt-3 text-center text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mt-3 mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <p>爆料站</p>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-2"></i>
        收起
      </div>
    </div>
    <!-- end of nav icon-->
    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/articles/${items._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(items ,i ) in category.newsList "
          :key="i"
        >
          <span>[{{items.CategoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{items.title}}</span>
          <span class="text-grey fs-sm">{{items.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>
    <!-- m-card -start-->

    <!-- m-card-end -->
    <m-list-card icon="hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin :0 -0,5rem">
          <router-link 
            tag="div"
            :to="`heroes/${items._id}`"
            class="py-2 text-center px-2"
            style="width:20%"
            v-for="(items ,i ) in category.heroList "
            :key="i"
          >
            <img :src="items.avatar" class="w-100" />
            <div>{{items.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>
 

    <!-- <i class="iconfont icon-menu text-primary"></i> -->
  </div>
</template>
 
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import dayjs from "dayjs";
export default {
  name: "home",
  created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
  },
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      heroCats: [],
      newsCats: [],
      
      swiperOption: {
        pagination: {el: ".pagination-home"},
        autoplay : {delay:5000}
      }
    };
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      console.log(res);

      this.newsCats = res.data;
    },
    async fetchHeroCats() {
      const res = await this.$http.get("heroes/list");
      console.log(res);

      this.heroCats = res.data;
    }
  },
  components: {}
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: #fff;
    &.swiper-pagination-bullet-active {
      background: map-get($map: $colors, $key: "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
  }
}
</style>
  

