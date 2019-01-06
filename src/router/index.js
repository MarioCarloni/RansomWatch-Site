import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Pricing from '@/components/Pricing'
import Demo from '@/components/Demo'
import Thankyou from '@/components/Thankyou'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/about',
    	name: 'About',
    	component: About
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/thankyou',
      name: 'Thankyou',
      component: Thankyou
    }
  ]
})
