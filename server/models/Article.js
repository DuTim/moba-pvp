/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 15:11:09
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-30 16:41:33
 */
const mongoose = require('mongoose')
//结构
const schema = new mongoose.Schema({

    title: {
        type: String
    },

    categories: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    }],
    body: {
        type: String
    }

}, {
    timestamps: true
})
//模型
const Article = mongoose.model('Article', schema)
module.exports = Article