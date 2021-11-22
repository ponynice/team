import Vue from 'vue'
import VueRouter from 'vue-router'
import First from '../components/first.vue'
import Login from '../components/login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path:'/',redirect:'/login'},
    {path:'/first',component:First},
    {path:'/login',component:Login}
  ]
})
