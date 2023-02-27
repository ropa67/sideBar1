import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Master from '../pages/layout/Master.vue'

const routes = [
  {
    path: '/',
    name: 'master',
    component: Master,
    redirect: '/dashboard',
    children:[
      {
        name: 'dashboard',
        path:'/dashboard',
        component: Dashboard
      
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
