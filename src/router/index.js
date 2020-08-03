import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import biaodan from '@/components/biaodan'

Vue.use(Router)
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
// return originalPush.call(this, location).catch(err => err)
// }
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/biaodan',
      name: 'BiaoDan',
      component: biaodan
    }
  ]
})
