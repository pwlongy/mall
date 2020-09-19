/*
 * @Author: your name
 * @Date: 2020-08-24 00:54:35
 * @LastEditTime: 2020-08-25 00:54:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuemall\src\vue.congfig.js
 */
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets' : '@/assets',
        'common' : '@/common',
        'components' : '@/components',
        'Network' : '@/Network',
        'views' : '@/views'
      }
    }
  },
  devServer: {
    overlay: {
        warnings: false,
        errors: false
    },

},
lintOnSave: false
}
