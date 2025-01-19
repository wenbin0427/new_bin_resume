<template>
    <ul class="nav sticky-top justify-content-center border-1 border-bottom border-warning mt-3 pb-3" style="z-index: 999;background-color: #212121;">
        <li class="nav-item">
          <a class="nav-link active text-white"  href="./#aboutme">關於我</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="./#work">個人作品</a>
        </li>
        <li class="nav-item">
          <button class="nav-link text-white" :onClick="navigateTocontact">與我聯絡</button>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white" to="">更新日誌</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white" href="https://wenbin0427.github.io/bin_resume.github.io/index.html" target="_blank">舊版個人履歷</a>
        </li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'NavBar', // 組件名稱
    methods: {
      navigateTocontact() {
        this.$router.push('/contact'); // 跳轉到商品頁
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  