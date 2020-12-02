import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Main from '../components/Main.vue'
import Vote from '../components/Vote.vue'
import Login from '../components/Login.vue'
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
        path: '/NewsPage',
        component: NewsPage
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/components/NotFind')
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }
    ]
})
 
export default router