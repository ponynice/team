import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/icon/iconfont.css'
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts'
import 'lib-flexible/flexible.js'
import VueVideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import axios from 'axios'
import qs from 'qs';
Vue.prototype.$qs = qs;
Vue.prototype.$axios=axios
Vue.config.productionTip = false
Vue.use(VueVideoPlayer)
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
