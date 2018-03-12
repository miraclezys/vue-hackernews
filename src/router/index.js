import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
      path: '/top/:page(\\d+)?',
      name: 'top',
      component: ItemList
    }
  ]
})
