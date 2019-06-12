import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let routes = [
    {
        path: "/",
        redirect: '/login',
        component: () => import('@/views/login/index')
    },
    {
        path: '/login',
        component: () => import('@/views/login/index')

    },
    {
        path: '/layout',
        component: () => import('@/layout/index'),
        children: [
            {
                path: '/consignee',
                name: "Consignee",
                component: () => import('@/views/consignee/index')
            },
            {
                path: '/home',
                name: "Home",
                component: () => import('@/views/home/index')
            },
            {
                path: "/on_sale_port",
                name: "Port",
                component: () => import("@/views/on_sale_port/index")
            },
            {
                path: '/history',
                name: 'History',
                component: () => import('@/views/history/index')
            },
            {
                path: '/edit',
                name: "Edit",
                component: () => import('@/views/edit/index')
            }
        ]
    }
]

export default new Router({routes})