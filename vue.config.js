const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/new_bin_resume/' // 替換成你的儲存庫名稱
    : 'dist',
  devServer: {
    historyApiFallback: true
  }
})
