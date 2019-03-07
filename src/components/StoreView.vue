<template>
  <div>
    <h1>{{count}}</h1>
    <h1>
      <div v-for="light in this.lights" :key="light.key">
        <ul id="" class="">
          <li v-for="(value, key) in light" :key="value.key">{{key}} - {{ value }}</li>
        </ul>
      </div>
    </h1>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    
  name: "storeView",
  computed:{ 
      ...mapState(['lights']),
      count(){return this.$store.getters.getNumberOfLights}
      }
};
</script>
<style>
</style>
