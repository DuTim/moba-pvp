/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 14:27:51
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-28 10:51:18
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'
import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'
import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'
import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'
import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'
import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      isPublic: true
    },
  }, {
    path: '/',
    name: 'main',
    component: Main,
    children: [{
        path: "categories/create",
        name: "category-edit",
        component: CategoryEdit

      }, {
        path: "categories/list",
        name: "category-list",
        component: CategoryList

      },
      {
        path: "categories/edit/:id",
        name: "category-edit:id",
        component: CategoryEdit,
        props: true,

      },


      {
        path: "items/create",
        name: "item-edit",
        component: ItemEdit

      }, {
        path: "items/list",
        name: "item-list",
        component: ItemList

      },
      {
        path: "items/edit/:id",
        name: "item-edit:id",
        component: ItemEdit,
        props: true,

      },

      {
        path: "heros/create",
        name: "hero-edit",
        component: HeroEdit

      }, {
        path: "heros/list",
        name: "hero-list",
        component: HeroList

      },
      {
        path: "heros/edit/:id",
        name: "hero-edit:id",
        component: HeroEdit,
        props: true,

      },

      {
        path: "articles/create",
        name: "article-edit",
        component: ArticleEdit

      }, {
        path: "articles/list",
        name: "article-list",
        component: ArticleList

      },
      {
        path: "articles/edit/:id",
        name: "article-edit:id",
        component: ArticleEdit,
        props: true,

      },

      {
        path: "ads/create",
        name: "ad-edit",
        component: AdEdit

      }, {
        path: "ads/list",
        name: "ad-list",
        component: AdList

      },
      {
        path: "ads/edit/:id",
        name: "ad-edit:id",
        component: AdEdit,
        props: true,

      },


      {
        path: "admin_users/create",
        name: "admin_user-edit",
        component: AdminUserEdit

      }, {
        path: "admin_users/list",
        name: "admin_user-list",
        component: AdminUserList

      },
      {
        path: "admin_users/edit/:id",
        name: "admin_user-edit:id",
        component: AdminUserEdit,
        props: true,

      },
    ]
  },


]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  if(!to.meta.isPublic && !localStorage.token){
    Vue.prototype.$message({
      type:"error",
      message:"请登录"
      
    })
    return next("/login")
  }
  next()
})
export default router