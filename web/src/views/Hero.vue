<!--
 * @Description: 
 * @Author: DuTim
 * @Date: 2020-01-31 13:15:01
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-31 23:33:34
 -->
<template>
  <div class="page-hero" v-if="model">
    <div class="topbar bg-black py-2 px-3 d-flex ai-center text-white">
      <img src="../assets/logo.png" height="30" alt />
      <div class="px-2 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="ml-4">攻略站</span>
      </div>
      <router-link tag="div" to="/">更多英雄 &gt; &gt;</router-link>
    </div>
    <div class="top" :style="{ 'background-image':`url(${model.banner})`}">
      <div class="info text-white p-4 d-flex flex-column h-100 jc-end">
        <div>{{model.title }}</div>
        <h2 class="py-2">{{ model.name}}</h2>
        <div class="fs-sm">{{model.categories.map(v=>{return v.name}).join('/')}}</div>
        <div class="d-flex jc-between ai-center">
          <div class="scores d-flex ai-center pt-2" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{model.scores.difficult}}</span>
            <span>技能</span>
            <span class="badge bg-blue">{{model.scores.skills}}</span>
            <span>攻击</span>
            <span class="badge bg-primary">{{model.scores.attack}}</span>
            <span>生存</span>
            <span class="badge bg-blue">{{model.scores.survive}}</span>
          </div>
          <router-link class="text-grey fs-sm" tag="span" to="/">皮肤 4&gt;</router-link>
        </div>
      </div>
    </div>
    <!-- end of top -->
    <div>
      <div class="px-3 bg-white">
        <div class="nav d-flex jc-around pt-3 pb-2 border-bottom">
          <div class="nav-item" :class="{active :swiperIndex===0}">
            <div
              class="nav-link"
              @click="()=>{
              swiperIndex=0;
              $refs.card.swiper.slideTo(swiperIndex);
              }"
            >英雄初识</div>
          </div>
          <div class="nav-item" :class="{active :swiperIndex===1} ">
            <div
              class="nav-link"
              @click="()=>{
              swiperIndex=1;
              $refs.card.swiper.slideTo(swiperIndex);
              }"
            >进阶攻略</div>
          </div>
        </div>
      </div>
      <swiper ref="card">
        <swiper-slide>
          <!--  -->
          <div>
            <div class="p-3 border-bottom">
              <div class="d-flex">
                <router-link tag="button" to="/" class="btn btn-lg flex-1">
                  <i class="iconfont icon-menu"></i>英雄介绍视频
                </router-link>
                <router-link tag="button" to="/" class="btn btn-lg flex-1 ml-2">
                  <i class="iconfont icon-menu"></i>一图识英雄
                </router-link>
              </div>
              <!-- skills -->
              <div class="skills bg-white mt-3">
                <div class="d-flex jc-around">
                  <img
                    :src="item.icon"
                    v-for="(item, index) in model.skills"
                    :key="index"
                    width="60"
                    height="60"
                    class="icon"
                    :class="{active : currentSkillIndex === index}"
                    @click="currentSkillIndex=index"
                  />
                </div>
                <div v-if="currentSkill">
                  <div class="d-flex ai-center pt-4 pb-3">
                    <h3 class="m-0">{{currentSkill.name}}</h3>
                    <span class="text-grey-1 ml-4">(冷却值: {{currentSkill.delay}})</span>
                    <span class="text-grey-1 ml-4">(冷却值: {{currentSkill.cast}})</span>
                  </div>
                  <p>{{currentSkill.description}}</p>
                  <div class="border-bottom"></div>
                  <p class="text-grey-1 pb-4">小提示:{{ currentSkill.tips}}</p>
                </div>
              </div>
            </div>
            <m-card color="black" plain icon="menu" title="出装推荐" class="hero-items">
              <template slot="content">
                <div class="fs-xl my-3">顺风出装</div>
                <div class="d-flex mb-3 jc-around text-center">
                  <div v-for="(item, index) in model.items1" :key="index">
                    <img class="icon" :src="item.icon" />
                    <div class="fs-xs mt-2">{{item.name}}</div>
                  </div>
                </div>
                <div class="border-bottom"></div>
                <div class="fs-xl my-3">逆风出装</div>
                <div class="d-flex jc-around text-center">
                  <div v-for="(item, index) in model.items2" :key="index">
                    <img class="icon" :src="item.icon" />
                    <div class="fs-xs mt-2">{{item.name}}</div>
                  </div>
                </div>
              </template>
            </m-card>
            <m-card color="black" plain icon="menu" title="使用技巧">
              <template slot="content">
                <p class="m-0">{{model.usageTips}}</p>
              </template>
            </m-card>
            <m-card color="black" plain icon="menu" title="对抗技巧">
              <template slot="content">
                <p class="m-0">{{model.battleTips}}</p>
              </template>
            </m-card>
            <m-card color="black" plain icon="menu" title="英雄关系">
              <template slot="content">
                <div class="fs-xl">最佳拍档</div>
                <div v-for="(item, index) in model.partners" :key="index">
                  <div class="d-flex pt-2 ai-center">
                    <img :src="item.hero.avatar" alt height="50" />
                    <p class="flex-1 ml-3 m-0">{{item.description}}</p>
                  </div>
                </div>
              </template>
            </m-card>
          </div>
        </swiper-slide>
        <swiper-slide>进阶攻略</swiper-slide>
      </swiper>
    </div>

    <!-- <h1>{{id}}</h1>
    <h1>{{model.name}}</h1>                               c-->
  </div>
</template>
<script>
export default {
  created() {
    this.fetch();
  },
 
  watch: {
    id() {
      this.fetch();
    }
  },
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null,
      swiperIndex: 0,
      currentSkillIndex: 0
    };
  },
  computed: {
    currentSkill() {
      return this.model.skills[this.currentSkillIndex];
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`);
      this.model = res.data;
      console.log(this.model);
    }
  }
};
</script>
<style lang="scss">
@import "../assets/css/_variables.scss";
.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: 100% auto;
  }
  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .scores {
      .badge {
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.6rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
  .skills {
    img.active {
      border: 3px solid map-get($map: $colors, $key: "primary");
      border-radius: 45%;
    }
  }
  .hero-items {
    img.icon {
      width: 3.4615rem;
      height: 3.4615rem;
      border-radius: 50px;
    }
  }
}
</style>
