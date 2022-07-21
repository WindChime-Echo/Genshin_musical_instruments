const { defineConfig } = require('@vue/cli-service')
const path = require('path');

function resolve (dir) {
  //设置绝对路径
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('@views', resolve('./src/views'))
      .set('@assets', resolve('./src/assets'))
      .set('@music', resolve('./src/assets/music'))
  }
})


// module.exports = {
//   chainWebpack: (config) => {
//     config.resolve.alias
//       .set('@', resolve('./src'))
//       .set('@views', resolve('./src/views'))
//       .set('@assets', resolve('./src/assets'))
//       .set('@music', resolve('./src/assets/music'))
//   }
// }