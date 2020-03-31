/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2020-01-30 17:30:41
 * @LastEditors: Dutim
 * @LastEditTime: 2020-03-31 22:32:40
 */
import axios from 'axios'
const http =axios.create({
    baseURL: process.env.VUE_APP_API_URL || "/web/api"
    // baseURL:"http://localhost:3000/web/api/"
})
export default http