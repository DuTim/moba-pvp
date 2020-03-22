/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 15:02:15
 * @LastEditors: Dutim
 * @LastEditTime: 2020-03-22 09:47:16
 */
module.exports = app => {
    const jwt = require("jsonwebtoken")
    const assert = require('http-assert')
    const AdminUser = require('../../models/AdminUser')
    const express = require('express')
    const router = express.Router({
        mergeParams: true
    })
    const authMiddleware = require('../../middleWare/auth')()
    const resourceMiddleware = require("../../middleWare/resoource")()
    //创建资源
    router.post('/',
        async (req, res) => {
            // console.log("ok");
            const model = await req.Model.create(req.body)
            // console.log("ok1");
            res.send(model)
        })
    //修改资源
    router.put('/:id', async (req, res) => {
        //  console.log(req.body);      
        // console.log(req.params.id);  
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        // console.log(model);
        res.send(model)
    })
    //删除资源
    router.delete('/:id', async (req, res) => {
        // console.log(req.body);      
        // console.log(req.params.id);  
        const model = await req.Model.findByIdAndDelete(req.params.id)
        // console.log(model);
        res.send({
            success: true
        })
    })
    //获取全部资源
    router.get("/", async (req, res) => {
        const queryOptions = {}
        if (req.Model.modelName === 'Category') {
            queryOptions.populate = "parent"
        }
        const list = await req.Model.find().setOptions(queryOptions).limit(100)
        res.send(list)
    })
    //获取单个
    router.get("/:id", async (req, res) => {
        const item = await req.Model.findById(req.params.id).limit(100)
        res.send(item)
    })
    //资源中间件

    app.use('/admin/api/rest/:resource', authMiddleware, resourceMiddleware, router)



    const multer = require('multer')
    const upload = multer({
        dest: __dirname + '/../../uploads',
    })
    //资源上传
    app.post('/admin/api/upload',  authMiddleware, upload.single('file'), async (req, res) => {
        const file = req.file;
        // let backNameArray = file.originalname.split(".")
        //    let backName=backNameArray[backNameArray.length-1]
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)


    })
    //login 
    app.post('/admin/api/login', async (req, res) => {
        const {
            username,
            password
        } = req.body
        //找用户
        const user = await AdminUser.findOne({
            username
        }).select("+password")
        assert(user, 422, "用户不存在")
        // if (!user) {
        //     return res.status(422).send({
        //         message: "用户不存在"
        //     })
        // }
        //检验密码
        const isValid = require('bcryptjs').compareSync(password, user.password)
        assert(isValid, 422, "密码错误")
        //返回token
        const token = jwt.sign({
            id: user._id,
            _id: user._id,
            username: user.username
        }, app.get("SECRET"))
        res.send({token:"Bearer "+token})
    })
    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}