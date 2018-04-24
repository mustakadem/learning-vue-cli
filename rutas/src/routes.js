import Home from './component/home';
import Equipo from './component/Equipo';
import Usuario from './component/Usuario';
import UsuarioFotos from './component/UsuarioFotos';
import UsuarioBio from './component/UsuarioBio';
import Contacto from './component/Contacto';
import NoEncontrado from './component/NoEncontrado';
import {store} from "./store";

export const routes = [
  {path: '/', component: Home, name:'home'},
  {path: '/prueba', alias:'/otraprueba' , redirect:{name:'home'} , component: Home},
  {path: '/equipo/:id', component:Equipo,  children: [
      {path: '', components:{
        default:Usuario,
          bio: UsuarioBio,
          fotos: UsuarioFotos
        },name:'equipo'}

        ] },
  {
    beforeEnter: ((to,from,next) => {
    console.log('Acceso a ruta contacto');
    next(store.state.auth);
    }),
    path: '/contacto', meta:{privado: true}, component:Contacto, name:'contacto', props:{newsletter:true}
    },

  {path: '*', component: NoEncontrado}
  ];
