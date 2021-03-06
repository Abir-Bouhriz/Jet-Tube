import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Channel from '../components/Channel'
import VideoPlay from '../components/VideoPlay'
import History from '../components/History'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/videoPlay',
    name: 'VideoPlay',
    component: VideoPlay
  },
  {
    path: '/channel',
    name: 'Channel',
    component: Channel
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
