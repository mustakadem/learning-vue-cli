<template>
<section>
  <router-link to="/">info</router-link>
  <router-link :to="{path: '/bio', hash:'#parrafo'}">Bio</router-link>
  <hr>
  <router-view></router-view>
</section>
</template>

<script>
export default {
  name: 'app',

}
</script>

<style>

</style>
