/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 15:07:04
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-02-01 16:51:12
 */
module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: true 
    })
     require('require-all')(__dirname + '/../models')
}