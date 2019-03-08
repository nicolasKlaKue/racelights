<template>
    <div class="">
        <h3 class="title">Verzögerung für jede Lampe</h3>
        <div v-for="(light, index) in lights" :key="light.key" class="form-inline text-center card-body card-text justify-content-center">
            <label class="title" for="val+light.id">Lampe {{index + 1}}.</label>
            <input v-model="light.time" class="form-control dark-gray title" type="" name="light.id" id="val+light.id">
        </div>
        <button class="btn btn-success btn-lg btn-block pacifico" v-on:click="ack">Start</button>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'WhatTimes',
    methods:{
        ack: function () {
            this.$store.commit('acknowledge');
        }
    },
    computed:{ 
      ...mapState(['lights'])
    }
}
</script>
<style>

</style>
