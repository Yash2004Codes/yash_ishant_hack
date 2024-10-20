import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'; // Ensure this path is correct

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Additional routes can be added here
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
