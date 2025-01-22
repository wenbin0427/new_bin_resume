module.exports = {
    parserOptions: {
      parser: 'babel-eslint',  // 使用 babel-eslint 解析器，支持最新的 JavaScript 語法
    },
    env: {
      browser: true,  // 支援瀏覽器環境
      node: true,     // 支援 Node 環境
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',  // 支援 Vue 3 的規範
    ],
    plugins: [
      'vue',  // 啟用 Vue 插件
    ],
    rules: {
      'no-undef': 'off',  // 關閉 no-undef 規則
      'no-unused-vars': 'warn',  // 警告未使用的變數
      'vue/multi-word-component-names': 'off',  // 禁用該規則

    },
  };
  