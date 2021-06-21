import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/loginView/LoginView";

const routes = [
  {
    path:'/',
    redirect:'/login',
  },
  {
    path:'/login',
    component:LoginView,
  },
  {
    path: '/user',
    component: () => import('views/userView/UserView'),
    beforeEnter: (to, from, next) => {
      if(from.path === '/login'){
        next();
      }else{
        alert('您还没有登录，请先登录');
        next('/login');
      }
    }
  },
  {
    path:'/admin',
    component: () => import('views/adminView/AdminView'),
    beforeEnter:(to,from,next) => {
      if(from.path === '/login'){
        next()
      }else{
        alert('您还没有登录，请先登录');
        next('/login')
      }
  }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
