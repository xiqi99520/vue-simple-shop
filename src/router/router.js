import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Detail from '@/components/detail'
import Success from '@/components/success'
import List from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/detail',
      name: 'Detail',
      component: Detail
    },{
      path: '/success',
      name: 'Success',
      component: Success
    },{
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
