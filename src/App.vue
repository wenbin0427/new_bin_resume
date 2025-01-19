<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

import AOS from 'aos';

export default{
  name:'App',
  components:{
    NavBar,
  },

};
AOS.init();

</script>
