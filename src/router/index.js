import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestWorld from '@/components/TestWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/foo',
      name: 'TestWord',
      component: TestWorld
    },
    {
      path: '/fcc',
      name: 'TestWord2',
      component: TestWorld
    }
  ]
})
