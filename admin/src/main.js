/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 14:21:29
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-28 11:24:39
 */
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './css/index.css'
import router from './router'
import {
  http
} from './http.js'
Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.mixin({
  computed: {
    uploadurl(){
      return this.$http.defaults.baseURL+"/upload"
    }
  },
  methods: {
    getAuthHeaders() {
      return {
      Authorization: `Bearer ${localStorage.token ||''}`
      }
    }
  },
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')