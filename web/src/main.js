/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 14:21:13
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-02-05 19:18:24
 */
import Vue from 'vue'
import App from './App.vue'
import http from  './http.js'
Vue.prototype.$http=http
Vue.config.productionTip = false
import './assets/css/style.scss'

import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import './assets/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
//card.vue
import Card from './components/Card.vue'
Vue.component('m-card' ,Card)
//listcard.vue
import ListCard from './components/ListCard.vue'
Vue.component('m-list-card' ,ListCard)

new Vue({
 router,

 render: h => h(App)
}).$mount('#app')
