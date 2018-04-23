<template>
  <section>
    <h1>Home</h1>
    <router-link :to="'/equipo/'+ id">Equipo</router-link>
  </section>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        id: 'musta'
      }
    }
  }
</script>

<style scoped>

</style>
