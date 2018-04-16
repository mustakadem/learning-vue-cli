<template>
  <div>
    <h1>Contador: {{mostrarCantidad}}</h1>

    <button @click="aumentar">Aumentar</button>
    <button @click="reducir">Reducir</button>

  </div>
</template>

<script>
  export default {
     // props: ['cantidad'],
    methods: {
        aumentar(){
         // this.$emit('aumentar');
          this.$store.state.cantidad++;
        },
      reducir(){

        //this.$emit('reducir');
        this.$store.state.cantidad--;
        }
    },
    computed:{
        mostrarCantidad(){
          return this.$store.state.cantidad;
        }
    }
  }
</script>


<style>
</style>
