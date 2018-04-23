import Home from './component/Home';
import Contact from './component/Contacto';
import User from './component/User';
import Equipo from './component/Equipo';
import EquipoMusta from './component/EquipoMusta';

export const routes = [
  {path: '/', component: Home},
  {path: '/contacto', component: Contact},
  {path: '/user/:id', component: User},
  {path: '/equipo/', component: Equipo,
    children:[
      {path: 'musta', component: EquipoMusta}
    ]},

];

