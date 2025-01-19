<template>
    <div class="index">
        <theader />

        <section class="section aboutme" id="aboutme">
            <div class="container mt-5">
                <About />
            </div>
        </section>

        <section class="worksection work" id="work">
            <div class="container">
                <div class="row">
                    <WorkCard />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import theader from '../components/theader.vue';
import About from '../components/About.vue'
import WorkCard from '../components/WorkCard.vue'
import AOS from 'aos';

export default{
  name:'index',
  components:{
    theader,
    About,
    WorkCard,
  },


};
AOS.init();

</script>

<style src="@/assets/css/index.css"></style>
