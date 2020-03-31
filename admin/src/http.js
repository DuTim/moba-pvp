/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 14:52:47
 * @LastEditors: Dutim
 * @LastEditTime: 2020-03-31 22:13:15
 */
import axios from 'axios'
import Vue from 'vue'
import router from './router/index'
let http = axios.create({
    baseURL:process.env.VUE_APP_API_URL || '/admin/api',
    // baseURL: 'http://localhost:3000/admin/api'
})
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (localStorage.token) {
        config.headers.Authorization = "Bearer " + (localStorage.token || " ")
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

http.interceptors.response.use(res => {
    return res
}, err => {
    if (err.response.data.message) {


        Vue.prototype.$message({
            type: "error",
            message: err.response.data.message
        })
        if (err.response.status == 401) {
            console.log("login");
            router.push("/login")
        }
        console.log(err.response.data.message);
        return Promise.reject(err)
    }

})

export {
    http
}