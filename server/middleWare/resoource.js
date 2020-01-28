/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2020-01-28 10:31:19
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-28 10:38:54
 */


module.exports = (options) => {
   
    return async (req, res, next) => {
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../models/${modelName}`)
        next()
    }
}