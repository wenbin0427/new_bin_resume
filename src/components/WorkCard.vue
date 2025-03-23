<template>
        <PageTitle title="個人作品" />
        <div class="col-12 col-sm-4" data-aos="fade-up" data-aos-duration="1800" v-for="work in works" :key="work.id" >
            <div :class="work.menu" style="background-color: #353535;">
                <button type="button" class="adbt btn card-body btn-outline-dark" data-bs-toggle="modal" :data-bs-target="work.tagbtid" :href="work.url">
                    <img class="img-fluid" :src="work.img">
                    <div class="text-white fs-5">
                        {{ work.title }}
                    </div>
                </button>
                <div class="modal fade" :id="work.btid" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                    <div class="modal-dialog modal-xl ">
                        <div class="modal-content" style="background-color: #212121;">
                            <div class="modal-header border-0">
                                <h1 class="modal-title fs-5 text-warning w-100">{{ work.title }}</h1>
                                <button type="button" class="border-0 btn text-warning fw-semibold" data-bs-dismiss="modal" aria-label="Close">X</button>
                            </div>
                            <div :class="work.view"  >

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import PageTitle from './PageTitle.vue';
    import '@/assets/js/ajax'
    export default {
        name: 'WorkCard', // 組件名稱
        components: {
            PageTitle, // 註冊組件
        },
        data(){
            return {
                works:[
                    {id:1,menu:"topicsmenu card border-warning-subtle mt-5",view:"modal-body topicsview",tagbtid:"#work_topics",btid:"work_topics",title:"畢業專題-多元化販賣機",url:"./WorkHtml/topics.html",img:require('@/assets/img/logo.png')},
                    {id:2,menu:"twsigmenu card border-warning-subtle mt-5",view:"modal-body twsigview",tagbtid:"#work_twsig",btid:"work_twsig",title:"台灣觀光工廠",url:"./WorkHtml/twsightseeing.html",img:require('@/assets/img/rightimg2.png')},
                    {id:3,menu:"itemsmenu card border-warning-subtle mt-5",view:"modal-body itemsview",tagbtid:"#work_items",btid:"work_items",title:"待辦事項",url:"./WorkHtml/items.html",img:require('@/assets/img/items.png')},
                    {id:4,menu:"ESP32 card border-warning-subtle mt-5",view:"modal-body iotespsview",tagbtid:"#work_iot",btid:"work_iot",title:"Arduino ESP32實作溫度智慧監測",url:"./WorkHtml/iotesp32.html",img:require('@/assets/img/iotesp32.png')},
                    {id:5,menu:"DV card border-warning-subtle mt-5",view:"modal-body DVview",tagbtid:"#work_DV",btid:"work_DV",title:"南應討論版📟身分組驗證平台",url:"./WorkHtml/Discord_verify.html",img:require('@/assets/img/dc-2.png')},
                ],
            };
        },
                
    };



</script>
<style>

</style>
