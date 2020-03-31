/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2020-03-31 22:23:32
 * @LastEditors: Dutim
 * @LastEditTime: 2020-03-31 22:27:41
 */

module.exports = {
    outputDir:__dirname+'/../server/admin',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/admin/'
      : '/'
  }
