<template>
  <div>
    <!--<h1>Menu principal</h1>-->
    <!--<ul>-->
      <!--<li><a href="">Enlace</a></li>-->
      <!--<li><a href="">Enlace</a></li>-->
      <!--<li><a href="">Enlace</a></li>-->
      <!--<li><a href="">Enlace</a></li>-->
      <!--<li><a href="">Enlace</a></li>-->
      <!--<li><a href="">Enlace</a></li>-->
    <!--</ul>-->
      <!--<h2>Componente persona</h2>-->
    <!--<persona></persona>-->
    <!--<hr>-->
    <!--<h2>Componente elemento</h2>-->

    <!--<elemento tipo="footer">Hola mundo</elemento>-->
    <!--<hr>-->
    <!--<h2>Componente tarea</h2>-->

    <!--<tareas></tareas>-->
    <hr>
    <h2>Entendiendo vuex</h2>

    <!--Sin vuex-->
    <!--<contador :cantidad="cantidad"-->
               <!--@aumentar="cantidad++"-->
                <!--@reducir="cantidad&#45;&#45;">-->

    <!--</contador>-->


    <!--Con Vuex-->

    <contador></contador>

  </div>

</template>

<script>
  import persona from './component/persona'
  import elemento from './component/elemento'
  import tareas from './component/tareas'
  import contador from './component/contador'
export default {
  components:{persona,elemento,tareas,contador},
  data () {
    return {
        cantidad: 0,
    }
  }
}
</script>

<style>

</style>
