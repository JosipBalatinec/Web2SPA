import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddBook from '../views/AddBook.vue'
import BookDetailsView from '../views/BookDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/add-book',
      name: 'AddBook',
      component: AddBook,
    },
    {
      path: '/book/:id',
      name: 'BookDetails',
      component: BookDetailsView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    },
  ],
})

export default router
