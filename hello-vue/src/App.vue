<template>
  <div>
      <h2>Componente persona</h2>
    <persona></persona>
    <hr>
    <h2>Componente elemento</h2>

    <elemento tipo="footer">Hola mundo</elemento>
    <hr>
    <h2>Componente tarea</h2>

    <tareas></tareas>

  </div>

</template>

<script>
  import persona from './component/persona'
  import elemento from './component/elemento'
  import tareas from './component/tareas'
export default {
  components:{persona,elemento,tareas},
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
