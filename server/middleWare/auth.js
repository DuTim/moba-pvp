/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2020-01-28 10:31:19
 * @LastEditors: Dutim
 * @LastEditTime: 2020-03-22 09:50:53
 */


module.exports = (options) => {
    const jwt = require("jsonwebtoken")
    const assert = require('http-assert')
    const AdminUser = require("../models/AdminUser")
    return async (req, res, next) => {
        // console.log(req.headers.authorization);

        const token = String(req.headers.authorization || "").split(" ").pop()
        assert(token, 401, "请提供jwt token")
        try {
            const {
                id
            } = jwt.verify(token, req.app.get('SECRET'))
        } catch (error) {
            //  console.log(tokenData);
            assert(token, 401, "无效的jwt token")
            req.user = await AdminUser.findById(id)
            console.log(req.user);
            assert(req.user, 401, "请先登录")
        }
        await next()
    }
}