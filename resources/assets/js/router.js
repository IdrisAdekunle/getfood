
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from './components/index.vue'
import about from './components/about.vue'
import cart from './components/cart.vue'
import checkout from './components/checkout.vue'
import favorite from './components/favorite.vue'
import forgot from './components/forgot.vue'
import history from './components/history.vue'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
             meta:{
              //  auth: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: about,
             meta:{
              //  auth: true
            }
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart,
             meta:{
              //  auth: true
            }
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: checkout,
             meta:{
              //  auth: true
            }
        },
        {
            path: '/favorite',
            name: 'favorite',
            component: favorite,
             meta:{
              //  auth: true
            }
        },
        {
            path: '/forgot',
            name: 'forgot',
            component: forgot,
             meta:{
              //  auth: true
            }
        },
        {
            path: '/history',
            name: 'history',
            component: history,
             meta:{
              //  auth: true
            }
        },
    ]
})