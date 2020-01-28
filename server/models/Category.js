/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 15:11:09
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-25 20:59:00
 */
const mongoose = require('mongoose')
//结构
const schema = new mongoose.Schema({
    name: {
        type: String
    },
    parent: {
        type: mongoose.SchemaTypes.ObjectId,ref:'Category'
    }
})
//模型
const Category = mongoose.model('Category', schema)
module.exports = Category