<template>
    <ul class="nav sticky-top justify-content-center border-1 border-bottom border-warning mt-3 pb-3" style="z-index: 999;background-color: #212121;">
        <li class="nav-item">
          <button class="nav-link active text-white"  :onClick="navigateToabout">關於我</button>
        </li>
        <li class="nav-item">
          <button class="nav-link text-white" :onClick="navigateTowork">個人作品</button>
        </li>
        <li class="nav-item">
          <button class="nav-link text-white" :onClick="navigateTocontact">與我聯絡</button>
        </li>
        <li class="nav-item">
            <button class="nav-link text-white" :onClick="navigateTouplog">更新日誌</button>
        </li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'NavBar', // 組件名稱
    methods: {
      navigateTocontact() {
        this.$router.push('/contact'); // 跳轉到與我聯絡
      },
      navigateToabout() {
        this.$router.push('/#aboutme'); // 跳轉到關於我
      },
      navigateTowork() {
        this.$router.push('/#work'); // 跳轉到作品
      },
      navigateTouplog(){
        this.$router.push('/UpLog'); // 跳轉到更新日誌
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  