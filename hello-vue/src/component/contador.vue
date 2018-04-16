<template>
  <div>
    <h1>Contador: {{cantidad}}</h1>

    <button @click="aumentar">Aumentar</button>
    <button @click="reducir">Reducir</button>

  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex';

  export default {
     // props: ['cantidad'],
    // methods: {
    //     aumentar(){
    //      // this.$emit('aumentar');
    //      // this.$store.state.cantidad++;
    //       this.$store.commit('aumentar')
    //     },
    //   reducir(){
    //
    //     //this.$emit('reducir');
    //     //this.$store.state.cantidad--;
    //     this.$store.commit('reducir')
    //     }
    // },
    methods: mapMutations(['aumentar','reducir']),
    computed: mapState(['cantidad'])
  }
</script>


<style>
</style>
