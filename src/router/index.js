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
<<<<<<< HEAD
                name: 'History',
=======
>>>>>>> 6575fedb932d8a6dfec6311332e452d93681ce34
                component: () => import('@/views/history/index')
            }
        ]
    }
]

export default new Router({routes})