const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'new_public_bin_resume',
  devServer: {
    historyApiFallback: true
  }
})
