<template>
<div>  
    <h3 class="card-title">Wie viele Lampen?</h3>
    <div class="form-inline card-body justify-content-center">
        <input class="form-control" v-model="lightscount" type="text">
        <button class="btn btn-outline-primary" v-on:click="save">Save</button>
    </div>
    
</div>    
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'HowManyLights',
    data (){
        return {
            lightscount: 0
        }
    },
    methods: {
        save: function(){
            this.$store.commit('setNumberOfLights', this.lightscount);
        }
    },
    computed: {
        ...mapState(['count']),
        count () { return this.$store.getters.getNumberOfLights}
    }
}
</script>
<style>

</style>
