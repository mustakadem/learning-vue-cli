<template>

  <div>
    <tareasResantes></tareasResantes>
    <h2>Tareas por hacer</h2>

    <!--<ul>-->
      <!--<li v-for="tarea in tareasPendientes">-->
        <!--<a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>-->
      <!--</li>-->
    <!--</ul>-->
    <!--<h2>Las tareas finalizadas</h2>-->
    <!--<li v-for="tarea in tareasFinalizadas">-->
      <!--<a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>-->
    <!--</li>-->
  </div>

</template>

<script>
  import tareasResantes from './tareasRestantes';
  import {mapState} from 'vuex';
  export default {
    data(){
      return {
        // tareas: [
        //   {nombre: 'Aprender vue.js',completado:false},
        //   {nombre: 'Grabar video vue.js',completado:false},
        //   {nombre: 'Leer doc vue.js',completado:false},
        //   {nombre: 'Salir a ver el sol con vue.js',completado:false},
        // ],
        // finalizadas: []
      }
    },
    methods: {
       actualizarTarea(tarea){
         tarea.completado = !tarea.completado
       }
    },
    // computed: {
    //   tareasPendientes(){
    //     return this.tareas.filter((tarea) => !tarea.completado);
    //   },
    //   tareasFinalizadas(){
    //     return this.tareas.filter((tarea) => tarea.completado);
    //   }
    // },
    components:{tareasResantes},
    computed: mapState(['tareas'])
  }
</script>

<style scoped>
  li a{
    color:red;
    font-weight: bold;
    text-decoration: none;
  }
</style>
