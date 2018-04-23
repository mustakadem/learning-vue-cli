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
    <!--<hr>-->
    <!--<h2>Entendiendo vuex</h2>-->

    <!--&lt;!&ndash;Sin vuex&ndash;&gt;-->
    <!--&lt;!&ndash;<contador :cantidad="cantidad"&ndash;&gt;-->
               <!--&lt;!&ndash;@aumentar="cantidad++"&ndash;&gt;-->
                <!--&lt;!&ndash;@reducir="cantidad&#45;&#45;">&ndash;&gt;-->

    <!--&lt;!&ndash;</contador>&ndash;&gt;-->


    <!--Con Vuex-->

    <!--<contador></contador>-->

    <!--<h1>{{nombre}} {{apellido}}</h1>-->

    <!--<carro></carro>-->
    <!--<productos></productos>-->

    <!--<h1>Rutas con Vue Router</h1>-->
      <!--<router-link to="/" active-class="activo" tag="li">-->
        <!--<a>Home</a>-->
      <!--</router-link>-->
      <!--<router-link to="/contacto"  active-class="activo" tag="li">-->
        <!--<a>Contacto</a>-->
      <!--</router-link>-->

    <!--<router-link to="/user/77"  active-class="activo" tag="li">-->
      <!--<a>User</a>-->
    <!--</router-link>-->
    <hr>
    <router-view></router-view>
  </div>

</template>

<script>
  import persona from './component/persona';
  import elemento from './component/elemento';
  import tareas from './component/tareas';
  import contador from './component/contador';
  import productos from './component/Productos';
  import carro from './component/Carro';


  import {mapState} from 'vuex';

export default {
  components:{persona,elemento,tareas,contador,productos,carro},
  // data () {
  //   return {
  //       cantidad: 0,
  //   }
  // },
  // computed: mapState({
  //   nombre: (state) => state.nombre,
  //
  // })

  // computed: mapState(['nombre','apellido'])
}
</script>

<style>
  .activo a{
    color:red;
  }
</style>
