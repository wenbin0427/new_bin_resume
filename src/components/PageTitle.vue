<template>
    <p class="text-white text-center mt-5 fs-1 fw-semibold">{{ title }}</p>
</template>

<script>
  export default {
    name: 'PageTitle', // 組件名稱
    props: {
      title: String, // 標題文字
    },
  };
</script>
