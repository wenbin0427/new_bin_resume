const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/new_public_bin_resume/' : '/',
  devServer: {
    historyApiFallback: true
  }
})
