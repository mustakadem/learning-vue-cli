<template>
  <section>
    <button @click="cambiar">Cambiar Auth</button>
    <hr>
    <transition>
      <router-view></router-view>
    </transition>


  </section>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    methods: mapMutations(['cambiar']),
}
</script>

<style>

</style>
