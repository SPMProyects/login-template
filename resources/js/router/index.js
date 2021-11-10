import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
  //   meta: {
  //     requiresAuth: true,
  //   },
  //   children: [
  //     {
  //       path: 'overview',
  //       name: 'overview',
  //       component: () => import(/* webpackChunkName: "overview" */ '../views/Overview.vue'),
  //     },
  //     {
  //       path: 'products',
  //       name: 'products',
  //       component: () => import(/* webpackChunkName: "overview" */ '../views/Products.vue'),
  //     },
  //     {
  //       path: 'orders',
  //       name: 'orders',
  //       component: () => import(/* webpackChunkName: "overview" */ '../views/Orders.vue'),
  //     },
  //     {
  //       path: 'profile',
  //       name: 'profile',
  //       component: () => import(/* webpackChunkName: "overview" */ '../views/Profile.vue'),
  //     },
     
  //   ],
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router