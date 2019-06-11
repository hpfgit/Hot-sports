import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let routes = [
    {
        path: "/",
        component: () => import('@/views/login/index')
    },
    {
        path: '/layout',
        component: () => import('@/layout/index'),
        children: [
            {
                path: '/home',
                name: "Home",
                component: () => import('@/views/home/index')
            },
            {
                path: '/history',
                name: 'History',
                component: () => import('@/views/history/index')
            }
        ]
    }
]

export default new Router({routes})