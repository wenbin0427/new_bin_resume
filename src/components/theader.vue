<template>
    <div class="container theader">
        <div class="row ">
            <div class="col-12 text-center" >
                <div class="circle translate-middle" style="position: absolute; top: 40%; left: 50%; ">
                    <img class="img-fluid mt-4" :src="require('@/assets/img/Head_sticker.png')" data-aos="zoom-in" data-aos-duration="1000">
                </div>
                <div class="translate-middle" style="position: absolute; top: 60%; left: 50%; ">
                    <p class="text-white fw-semibold fs-4 mt-5">董文賓</p>
                    <a href="https://github.com/wenbin0427" target="_blank"><i class="bi bi-github" style="color:rgb(197, 196, 196);font-size: 50px;"></i></a>
                    <a href="https://hackmd.io/@0q3lEDkPQdaD6eZ8vpOC_A" target="_blank"><i class="bi bi-journal-bookmark-fill ms-3" style="color:rgb(197, 196, 196);font-size: 50px;"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'theader', // 組件名稱
  };
</script>

<style scoped>
.circle {
    width: 14.5rem;
    height: 14.5rem;
    border-radius: 50%;
    border: 1px solid #ffc107;
}
.theader{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
}
</style>