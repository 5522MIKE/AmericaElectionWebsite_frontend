import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Main from '../components/Main.vue'
import Vote from '../components/Vote.vue'
import Login from '../components/Login.vue'
import DataView from '../components/DataView'
import Introduction from '../components/Introduction.vue'
import IntroductionB from '../components/IntroductionB.vue'
import IntroductionO from '../components/IntroductionO.vue'
import NewsPage from '../components/NewsPage.vue'

const routerHistory = createWebHistory()
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由
const router = createRouter({
    history: routerHistory,
    routes: [
    {
        path: '/',
        component: Main
    },
    {
        path: '/hw',
        component: HelloWorld
    },
    {
        path:'/vote',
        component: Vote
    },
    {
        path:'/Login',
        component: Login
    },
    {
        path: '/DataView',
        name: 'DataView',
<<<<<<< HEAD
        component: DataView},
    {
        path: '/NewsPage',
        component: NewsPage
=======
        component: DataView
    },
    {
        path: '/NewsPage',
        component: NewsPage

>>>>>>> 71f0b1c8459591f072793114c7a4bd261c610fc3
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/components/NotFind')
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    },
    {
        path: '/introduction',
        component: Introduction
    },
    {
        path: '/introductionb',
        component: IntroductionB
    },
    {
        path: '/introductiono',
        component: IntroductionO
    }
    ]
})
export default router