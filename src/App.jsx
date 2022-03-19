import React, { Suspense, lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import { Spin } from 'antd'

import Layout from '@/layouts/Layout'
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Form = lazy(() => import('@/pages/Form'))
const Table = lazy(() => import('@/pages/Table'))
const Login = lazy(() => import('@/pages/Login'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const loadComp = (Comp) => {
  return (
    <Suspense fallback={<Spin />}>
      <Comp />
    </Suspense>
  )
}

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: loadComp(Dashboard)
      },
      {
        path: 'form',
        element: loadComp(Form)
      },
      {
        path: 'table',
        element: loadComp(Table)
      }
    ]
  },
  { path: '/login', element: loadComp(Login) },
  { path: '*', element: loadComp(NotFound) }
]

function App() {
  const element = useRoutes(routes)
  return element
}

export default App
