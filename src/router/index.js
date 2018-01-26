import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import TestWorld from '@/components/TestWorld'
import ItemList from '@/views/ItemList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Item',
      component: ItemList
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
