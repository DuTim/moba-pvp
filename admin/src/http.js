/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 14:52:47
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-28 10:03:13
 */
import axios from 'axios'
import Vue from 'vue'
import router from './router/index'
let http = axios.create({
    baseURL: 'http://localhost:3000/admin/api'
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