/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 15:11:09
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-27 17:24:44
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
    body:{
        type:String
    }
   
})
//模型
const Article = mongoose.model('Article', schema)
module.exports = Article