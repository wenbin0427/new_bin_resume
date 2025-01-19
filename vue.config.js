const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/new_bin_resume/' // 把 <repository> 換成你的 GitHub 專案名稱
    : '/'
})
