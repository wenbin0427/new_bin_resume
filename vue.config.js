const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/new_bin_resume/dist/',
  devServer: {
    historyApiFallback: true
  }
})
