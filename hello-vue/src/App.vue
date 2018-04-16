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

    <tareas></tareas>
    <!--<hr>-->
    <!--<h2>Entendiendo vuex</h2>-->

    <!--&lt;!&ndash;Sin vuex&ndash;&gt;-->
    <!--&lt;!&ndash;<contador :cantidad="cantidad"&ndash;&gt;-->
               <!--&lt;!&ndash;@aumentar="cantidad++"&ndash;&gt;-->
                <!--&lt;!&ndash;@reducir="cantidad&#45;&#45;">&ndash;&gt;-->

    <!--&lt;!&ndash;</contador>&ndash;&gt;-->


    <!--Con Vuex-->

    <contador></contador>

    <!--<h1>{{nombre}} {{apellido}}</h1>-->
  </div>

</template>

<script>
  import persona from './component/persona'
  import elemento from './component/elemento'
  import tareas from './component/tareas'
  import contador from './component/contador'

  import {mapState} from 'vuex';

export default {
  components:{persona,elemento,tareas,contador},
  data () {
    return {
        cantidad: 0,
    }
  },
  // computed: mapState({
  //   nombre: (state) => state.nombre,
  //
  // })

  computed: mapState(['nombre','apellido'])
}
</script>

<style>

</style>
