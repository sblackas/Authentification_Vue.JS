import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import MyJumbotron from './components/MyJumbotron'
import Dashboard from './components/Dashboard'
import store from './store'


Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const routes = [
  {path: '/dashboard', component: Dashboard,  meta: {
    requiresAuth: true
}},
  {path: '/', component: MyJumbotron },

  ]

  // router.beforeEach((to, from, next) => {
  //   if(to.matched.some(record => record.meta.requiresAuth)) {
  //       if (localStorage.getItem('jwt') == null) {
  //           next({
  //               path: '/login',
  //               params: { nextUrl: to.fullPath }
  //           })

const router = new VueRouter ({
  mode: "history",
  routes
})

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
  router
}).$mount('#app')
