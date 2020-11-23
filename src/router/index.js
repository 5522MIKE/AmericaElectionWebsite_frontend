import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Main from '../components/Main.vue'
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
    ]
})
 
export default router