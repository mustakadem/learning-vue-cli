import Home from './component/Home';
import Contact from './component/Contacto';
import User from './component/User';

export const routes = [
  {path: '/', component: Home},
  {path: '/contacto', component: Contact},
  {path: '/user/:id', component: User},
];

