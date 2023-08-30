import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from 'vue-dayjs'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCarousel from 'vue-carousel';
import VueMeta from 'vue-meta'
import Router from 'vue-router'


import {url} from './global/index'; 

Vue.use(dayjs)


Vue.use(VueCarousel);
Vue.use(VueAxios, axios)
Vue.use(VueMeta )
Vue.use(Router)

axios.defaults.baseURL =url;

Vue.config.productionTip = false

new Vue({
  router,
  store, 
  render: h => h(App),
}).$mount('#app')
