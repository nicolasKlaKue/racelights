<template>
  <div class="">
    <div v-if="state === 'prestart'">
      <div class>
        <button v-on:click="start" class="btn btn-outline-danger btn-lg">Start</button>
      </div>
    </div>
    <div v-if="state === 'running'">
      <div class="d-flex flex-row dyn-col">
        <div v-for="(light, index) in lights" :key="light.key" class="d-flex flex-column dyn-row">
          <div v-bind:class="{off: counter <= index, red: counter > index, green: greenlights}" class="light glass"></div>
          <div v-bind:class="{off: counter <= index, red: counter > index, green: greenlights}" class="light glass"></div>
        </div>
      </div>
    </div>
    <div v-if="state === 'done'">
      <div class="btn-group">
        <button v-on:click="restart" class="btn btn-outline-danger btn-lg">Restart</button>
        <button v-on:click="reset" class="btn btn-outline-warning btn-lg">Reset</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { setTimeout } from "timers";
export default {
  name: "Racelight",
  data() {
    return {
      state: "prestart",
      counter: 0,
      time: 0,
      greenlights: false
    };
  },
  methods: {
    reset: function() {
      this.state = "prestart";
      this.counter = 0;
      this.time = 0;
      this.greenlights = false;
      this.$store.commit("reset");
    },
    restart: function() {
      this.state = "prestart";
      this.counter = 0;
      this.time = 0;
      this.greenlights = false;
    },
    start: function() {
      this.state = "running";
      for(var i = 0; i < this.lights.length; i++  ){
          this.time += Number(this.lights[i].time);
          setTimeout(() => {
                this.counter++;
                if(this.counter == this.lights.length){
                  
                    this.greenlights = true;
                    setTimeout(() => {
                      this.state = 'done';
                    }, 3000)
                }
            }, this.time * 1000)
      }
    }
  },
  computed: {
    ...mapState(["lights"])
  }
};
</script>
<style>
.dyn-col{

}
.dyn-row{

}
.light {
  width: 20vh;
  height: 20vh;
  border-radius: 100%;
}
.red {
  background-color: red; /*for compatibility with older browsers*/
  background-image: linear-gradient(red, #ff6666);
}
.green {
  background-color: green; /*for compatibility with older browsers*/
  background-image: linear-gradient(green, lightgreen);
}
.off {
  background-color: black; /*for compatibility with older browsers*/
  background-image: linear-gradient(black, #222);
}
.fullscreen {
  height: 100vh;
  background-color: #333;
}
.glass {
  /* background styles */
  position: relative;
  display: inline-block;

  /* text styles */
  text-decoration: none;
  color: #fff;
  font-size: 25px;
  font-family: sans-serif;
  font-weight: 100;
}
.glass:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 200px;
  border-radius: 200px 200px 0 0;
  z-index: 10;
  background: linear-gradient(
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.2)
  );
}
@media only screen 
and (min-device-width : 375px) 
and (max-device-width : 812px) {
    .dyn-col 
    { 
        flex-direction: column !important;

     }
    .dyn-row{
        flex-direction: row !important;
    }
    .light {
    width: 15vh;
    height: 15vh;
    }
   }
</style>
