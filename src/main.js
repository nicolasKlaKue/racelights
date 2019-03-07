import Vue from 'vue'
import Vuex from 'vuex'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    ack: false,
    lights: []
  },
  mutations: {
    setNumberOfLights (state, n){
      state.lights = [];
      for (let index = 0; index < n; index++) {
        var light = {};
        light.id = index;
        light.time = 0.0;
        state.lights.push(light);
      }
    },
    acknowledge(state){
      state.ack = true;
    },
    reset(state){
      state.ack = false;
    }
  },
  getters: {
    getNumberOfLights: state => {
      return state.lights.length;
    }
  }
});



new Vue({
  render: h => h(App),
  store
}).$mount('#app')
