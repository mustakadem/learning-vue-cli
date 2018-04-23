import Home from './component/home';
import Equipo from './component/Equipo';
import Usuario from './component/Usuario';
import UsuarioFotos from './component/UsuarioFotos';
import UsuarioBio from './component/UsuarioBio';


export const routes = [
  {path: '/', component: Home, name:'home'},
  {path: '/prueba', alias:'/otraprueba' , redirect:{name:'home'} , component: Home},
  {path: '/equipo/:id', component:Equipo,  children: [
      {path: '', components:{
        default:Usuario,
          bio: UsuarioBio,
          fotos: UsuarioFotos
        },name:'equipo'}
    ] }
];
