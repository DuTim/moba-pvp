/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 15:07:04
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-26 23:13:05
 */
module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: true 
    })
}