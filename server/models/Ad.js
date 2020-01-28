/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 15:11:09
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-27 19:43:04
 */
const mongoose = require('mongoose')
//结构
const schema = new mongoose.Schema({

    name: {
        type: String
    },

    items: [{
        image: {
            type: String
        },
        url: {
            type: String
        },

    }],
 

})
//模型
const Ads = mongoose.model('Ads', schema)
module.exports = Ads