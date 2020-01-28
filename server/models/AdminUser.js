/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 15:11:09
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-27 20:38:32
 */
const mongoose = require('mongoose')

//结构
const schema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String,
        select:false,
        set:(val)=>{
           return  require('bcryptjs').hashSync(val,10)
        }
    }


})
//模型
const AdminUser = mongoose.model('AdminUser', schema)
module.exports = AdminUser