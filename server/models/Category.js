/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 15:11:09
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-30 16:53:03
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
schema.virtual('children',{
    localField:'_id',
    foreignField:'parent',
    justOne:false,
    ref:'Category'
})

schema.virtual('newsList',{
    localField:'_id',
    foreignField:'categories',
    justOne:false,
    ref:'Article'
})
//模型
const Category = mongoose.model('Category', schema)
module.exports = Category