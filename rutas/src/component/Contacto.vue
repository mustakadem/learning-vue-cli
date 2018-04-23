<template>
  <section>
    <h2>Donde encontrarme</h2>
    <p>C/. Ejemplo</p>
    <!--<h5>{{$route.params.newsletter}}</h5>-->
    <h5>{{newsletter}}</h5>
    <!--<template v-if="$route.params.newsletter === 'true'">-->
    <!--<template v-if="newsletter === 'true'">-->
    <template v-if="newsletter">
      <form action="">
        <h3>NewsLetter</h3>
        <label for="correoe">Correo-e</label>
        <input type="email" placeholder="You email" id="correoe">
      </form>
    </template>

  </section>
</template>

<script>
  export default {
    name: "Contacto",
    props:['newsletter']
  }
</script>

<style scoped>

</style>
