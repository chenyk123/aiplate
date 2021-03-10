import Vue from 'vue'
import VueRouter from 'vue-router'
import loginrouter from '@/router/login'
import Content from '@/router/home'
import Assign from '@/router/assign'
import Search from '@/router/search'
import NewProject from '@/router/newproject'
import UpLoad from '@/router/upload'
import Face from '@/router/face'

Vue.use(VueRouter)

const routes = [
  loginrouter,
  Content,
  Assign,
  Search,
  NewProject,
  UpLoad,
  Face,
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
