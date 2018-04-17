import Vue from 'vue';
import Vuex from 'vuex';

import productos from './modules/productos';
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules:{
    // productos
  },
  state: {
    // cantidad: 0,
    // nombre: 'musta',
    // apellido: 'kadem',
    // tareas: [
    //   {nombre: 'Aprender vue',completado: true},
    //   {nombre: 'Aprender js',completado: false},
    //   {nombre: 'Aprender django',completado: false},
    // ],
    // // productos: [
    // //   {nombre:'USB', precio: 50},
    // //   {nombre:'CD', precio: 30},
    // //   {nombre:'HDMI', precio: 150}
    // // ],
    // carro:[],
  },
  getters:{
    // tareasCompletadas: (state) => {
    //   return state.tareas.filter((tarea) => tarea.completado).length;
    // },
    // totalCompra: (state) => state.carro.reduce((total,producto) => total + producto.precio,0),
  },
  mutations:{
    // aniadirProducto: (state,producto) =>state.carro.unshift(producto),
    // comprarProducto: (state, indice) => state.carro.unshift(state.productos[indice]),
    // eliminarProducto: (state, indice) => state.carro.splice(indice,1),
    // aumentar: (state, cantidad) => state.cantidad += cantidad,
    // reducir: (state,cantidad) => state.cantidad -= cantidad,
  },
  // actions: {
  //   aumentarAsync: (context,cantidad) => {
  //     setTimeout(() => context.commit('aumentar',cantidad),2000);
  //   },
  //   reducirAsync: (context,valor) => {
  //     setTimeout(() => context.commit('reducir',valor.cantidad),2000);
  //   }
  // }
});

