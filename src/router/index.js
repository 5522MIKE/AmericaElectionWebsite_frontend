import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Main from '../components/Main.vue'
import Vote from '../components/Vote.vue'
import Login from '../components/Login.vue'
import DataView from '../components/DataView.vue'
import DataView2 from '../components/DataView2.vue'
import Introduction from '../components/Introduction.vue'
import IntroductionB from '../components/IntroductionB.vue'
import IntroductionO from '../components/IntroductionO.vue'
import NewsPage from '../components/NewsPage.vue'
import NewsPage2 from '../components/NewsPage2.vue'
import Comment from '../components/Comment.vue'

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
        component: DataView
    },
    {
        path: '/DataView2',
        name: 'DataView2',
        component: DataView2
    },
    {
        path: '/NewsPage',
        component: NewsPage

    },
    {
        path: '/NewsPage2',
        component: NewsPage2

    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/components/NotFind')
    },
    {
        // 404 匹配
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
    },
    {

        path: '/comment',
        component: Comment
    }
    ]
})
export default router