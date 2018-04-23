import Home from './component/home';
import Equipo from './component/Equipo';
import Usuario from './component/Usuario';
import UsuarioFotos from './component/UsuarioFotos';
import UsuarioBio from './component/UsuarioBio';


export const routes = [
  {path: '/', component: Home},
  {path: '/equipo/:id', component:Equipo, children: [
      {path:'', component: Usuario, children:[
          {path:'fotos', component:UsuarioFotos},
          {path:'bio', component:UsuarioBio}

        ]},

    ] }
];
