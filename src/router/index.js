import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Peluches from '../views/Peluches.vue';
import Patrones from '../views/Patrones.vue';
import Contacto from '../views/Contacto.vue';
import Producto from '../views/Producto.vue';
import Account from '../views/Account.vue';
import Success from '../views/PaymentSuccess.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/peluches',
    name: 'Peluches',
    component: Peluches
  },
  {
    path: '/patrones',
    name: 'Patrones',
    component: Patrones
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/producto/:id',
    name: 'Producto',
    component: Producto
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/register',
    name: 'Nueva Cuenta',
    component: Account
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
