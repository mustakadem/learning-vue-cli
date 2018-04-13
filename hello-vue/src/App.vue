<template>
  <div>

    <persona></persona>
    <elemento tipo="footer">Hola mundo</elemento>

  </div>

</template>

<script>
  import persona from './component/persona'
  import elemento from './component/elemento'
export default {
  components:{persona,elemento},
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
