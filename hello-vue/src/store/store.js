import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cantidad: 0,
    nombre: 'musta',
    apellido: 'kadem',
    tareas: [
      {nombre: 'Aprender vue',completado: true},
      {nombre: 'Aprender js',completado: false},
      {nombre: 'Aprender django',completado: false},
    ]
  },
  getters:{
    tareasCompletadas: (state) => {
      return state.tareas.filter((tarea) => tarea.completado).length;
    }
  }
});
