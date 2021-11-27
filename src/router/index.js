import Vue from 'vue'
import VueRouter from 'vue-router'
import First from '../components/first.vue'
import Login from '../components/login.vue'
import Register from '../components/register.vue'
import Hello from '../components/Hello.vue'
import Main from  '../views/BigBox.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path:'/',redirect:'/first'},
    {path:'/first',component:First},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'/home',component:Hello},
    {path:'/main',component:Main}
  ]
})
