import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import First from '../components/first.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path:'/',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/first',component:First}
  ]
})
