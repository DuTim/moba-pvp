/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 14:22:14
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-27 21:45:51
 */
const express =require('express')
const  app =express();
app.set("SECRET", "123456uyhwa")
//处理json
app.use(express.json())
//cors
app.use(require('cors')())
// 文件上传
app.use('/uploads', express.static(__dirname+'/uploads'))
//db
require('./plugins/db.js')(app)
//路由
require('./routes/admin/index')(app)
//监听端口 3000
app.listen(3000,()=>{
    console.log("http://localhost:3000");
    
})