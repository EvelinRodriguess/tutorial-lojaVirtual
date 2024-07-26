import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutLarge from '@/layouts/LayoutLarge.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutLarge,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: '/produtos/adicionar',
          name: 'ProductAdd',
          component: () => import('@/views/ProductAdd.vue'),
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/LoginView.vue'),
        },
        {
          path: "/acessorios",
          name: "acessorios",
          component: () => import ('@/views/AcessoriosView.vue'),
        },
        {
          path: "/categoria",
          name: "categoria",
          component: () => import ('@/views/CategoriaView.vue'),
        },
        {
          path: "/cor",
          name: "cor",
          component: () => import ('@/views/CorView.vue'),
        },
        {
          path:"/marca",
          name: "marca",
          component: () => import ('@/views/MarcaView.vue'),
        },
      ],
    },
  ],
});

export default router;