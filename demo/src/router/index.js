import { lazy } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import LazyRouter from '@/components/LazyRouter'
import AuthRoute from '@/components/AuthRoute'

// 路由加载组件
const LoginPage = LazyRouter(lazy(() => import(/*webpackChunkName:"LoginPage" */ "@/pages/login")))
const HomePage = LazyRouter(lazy(() => import(/*webpackChunkName:"HomePage" */ "@/pages/home")))
const Dashboard = LazyRouter(lazy(() => import(/*webpackChunkName:"HomePage" */ "@/pages/Dashboard")))
const Article = LazyRouter(lazy(() => import(/*webpackChunkName:"HomePage" */ "@/pages/Article")))
const Publish = LazyRouter(lazy(() => import(/*webpackChunkName:"HomePage" */ "@/pages/Publish")))
const NotFound = LazyRouter(lazy(() => import(/*webpackChunkName:"HomePage" */ "@/components/NotFound")))


// 路由规则
const routes = [
    { path: '/login', element: <LoginPage /> },
    // 重定向
    { path: '/', element: < Navigate to='/dashboard' /> },
    {
        element: <AuthRoute>< HomePage /></AuthRoute>,
        children: [
            { path: '/dashboard', element: < Dashboard /> },
            { path: '/article', element: < Article /> },
            { path: '/publish', element: < Publish /> }
        ]
    },
    // 404
    { path: '*', element: < NotFound /> }
]


// 导出路由
export default function AppRoute() {
    return useRoutes(routes)
}