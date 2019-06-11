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
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('@/views/home/index')
            }
        ]
    }
]

export default new Router({routes})