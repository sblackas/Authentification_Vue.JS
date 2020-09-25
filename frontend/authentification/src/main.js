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
  {path: '/dashboard', name: 'dashboard', component: Dashboard,  meta: {requiresAuth: true}},
  {path: '/', component: MyJumbotron },
]
  const router = new VueRouter ({
    mode: "history",
    routes
  })



  router.beforeEach((to, from, next) => {
    // let x = to.matched.some(rout => rout.meta.requiresAuth)
    if(to.matched.some(rout => rout.meta.requiresAuth === true)) {
      if (/*x == true && */store.state.token) {
        next()
    
    } else if (/*x == true && */store.state.token == null){

          next({
            path: "/",
            params: { nextUrl: to.fullPath},
          })
        }
        // else{
        // next()
        // }
       }
      next();
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

export default router
