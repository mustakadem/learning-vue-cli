<template>
  <div>
    <h1>Contador: {{cantidad}}</h1>

    <button @click="aumentarAsync">Aumentar</button>
    <button @click="reducirAsync">Reducir</button>

  </div>
</template>

<script>
  import {mapState, mapMutations,mapActions} from 'vuex';

  export default {
     // props: ['cantidad'],
    // methods: {
    //     aumentar(){
    //      // this.$emit('aumentar');
    //      // this.$store.state.cantidad++;
    //      // this.$store.commit('aumentar')
    //       this.$store.dispatch('aumentarAsync');
    //     },
    //   reducir(){
    //
    //     //this.$emit('reducir');
    //     //this.$store.state.cantidad--;
    //    //  this.$store.commit('reducir')
    //     this.$store.dispatch('reducirAsync');
    //
    //   }
    // },
   // methods: mapMutations(['aumentar','reducir']),
    methods: mapActions(['reducirAsync','aumentarAsync']),
    computed: mapState(['cantidad'])
  }
</script>


<style>
</style>
