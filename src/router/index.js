import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Landing from '@/components/Landing'
import Preview from '@/components/Preview'
import store from '@/vuex/store'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
      {
        path:'/landing',
        name:'Landing',
        component:Landing
      },
      {
        path:'/preview',
        name:'Preview',
        component:Preview
      }
  ]
})
