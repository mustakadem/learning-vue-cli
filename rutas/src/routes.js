import Home from './component/home';
import Equipo from './component/Equipo';
import Usuario from './component/Usuario';
import UsuarioFotos from './component/UsuarioFotos';
import UsuarioBio from './component/UsuarioBio';


export const routes = [
  {path: '/', component: Home},
  {path: '/equipo/:id', component:Equipo,  children: [
      {path:'', component: Usuario, name:'equipo', children:[
          {path:'fotos', component:UsuarioFotos, name:'fotos'},
          {path:'bio', component:UsuarioBio, name:'bio'}

        ]},

    ] }
];
