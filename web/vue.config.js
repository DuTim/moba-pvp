/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2020-03-31 22:23:32
 * @LastEditors: Dutim
 * @LastEditTime: 2020-03-31 22:31:04
 */

module.exports = {
    outputDir:__dirname+'/../server/web',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/'
      : '/'
  }
