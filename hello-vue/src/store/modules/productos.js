
const productos = [
  {nombre:'USB', precio: 50},
  {nombre:'CD', precio: 30},
  {nombre:'HDMI', precio: 150}
];

const mutations = {
  aniadirProducto: (state, producto) => state.carro.unshift(producto),
};


export default {
  state: productos,
  mutations,
};
