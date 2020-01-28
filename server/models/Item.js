/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 15:11:09
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-26 16:11:11
 */
const mongoose = require('mongoose')
//结构
const schema = new mongoose.Schema({
    name: {
        type: String
    },
    icon: {
        type: String
    }
})
//模型
const Item = mongoose.model('Item', schema)
module.exports = Item