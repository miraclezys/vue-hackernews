import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestWorld from '@/components/TestWorld'
import ItemList from '@/views/ItemList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Item',
      component: HelloWorld
    },
    {
      path: '/foo/:page(\\d+)?',
      name: 'foo',
      component: ItemList
    },
    {
      path: '/fcc/:id',
      name: 'TestWorld',
      component: TestWorld
    }
  ]
})
