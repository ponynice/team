import Vue from 'vue'
import VueRouter from 'vue-router'
import First from '../components/first.vue'
import Login from '../components/login.vue'
import Register from '../components/register.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path:'/',redirect:'/register'},
    {path:'/first',component:First},
    {path:'/login',component:Login},
    {path:'/register',component:Register}
  ]
})
