<template>
  <div id="app" class="fullscreen d-flex justify-content-center align-items-center">
    
    <div v-if="!ack" class="">
      <div class="">
        <h1 class="title pacifico">Julius famose Startübungen</h1>
        <div class="card black">
          
          <HowManyLights/>
        </div>  
        <div v-if="getNumberOfLights > 0" class="card black">
          <WhatTimes/>
        </div>
      </div>
    </div>
    <div v-else>
      <Racelight/>
    </div>
  </div>
</template>

<script>
import HowManyLights from "./components/views/HowManyLights.vue";
import WhatTimes from './components/views/WhatTimes.vue';
import Racelight from './components/views/Racelight.vue';
import { mapState, mapGetters } from 'vuex';
//
export default {
  name: "app",
  components: {
    HowManyLights, WhatTimes, Racelight
  },
  computed:{ 
    ...mapState(['lights', 'ack']),
    ...mapGetters(['getNumberOfLights'])
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Pacifico");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fullscreen {
  height: 100vh;
  background-color: #333;
}
.pacifico{
  font-family: 'Pacifico', cursive;
}
.title{
  color: white;
}
.black{
  background-color: black;
}
.dark-gray{
    background-color: #333;
}
</style>
