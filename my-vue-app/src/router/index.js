/* eslint-disable */

/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';

import HomeViewComponent from '../views/HomeViewComponent.vue';
import LoginComponent from '../components/LoginComponent.vue';
import RegisterComponent from '../components/RegisterComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeViewComponent,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterComponent,
  },
  // ... other routes
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
