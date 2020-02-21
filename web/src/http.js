/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2020-01-30 17:30:41
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-30 17:37:34
 */
import axios from 'axios'
const http =axios.create({
    baseURL:"http://localhost:3000/web/api/"
})
export default http