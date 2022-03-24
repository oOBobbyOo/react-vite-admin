import React, { Suspense, lazy, useEffect } from 'react'
import { useRoutes, useNavigate } from 'react-router-dom'
import { Spin } from 'antd'

import Layout from '@/layouts/Layout'

const Analysis = lazy(() => import('@/pages/Dashboard/Analysis'))
const Monitor = lazy(() => import('@/pages/Dashboard/Monitor'))
const Workplace = lazy(() => import('@/pages/Dashboard/Workplace'))

const BaseForm = lazy(() => import('@/pages/Form/BaseForm'))
const AdvancedForm = lazy(() => import('@/pages/Form/AdvancedForm'))
const StepForm = lazy(() => import('@/pages/Form/StepForm'))

const BaseTable = lazy(() => import('@/pages/Table/BaseTable'))
const AdvancedTable = lazy(() => import('@/pages/Table/AdvancedTable'))

const Login = lazy(() => import('@/pages/Login'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const loadComp = (Comp) => (
  <Suspense fallback={<Spin />}>
    <Comp />
  </Suspense>
)

function Redirect({ to }) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to, { replace: true })
  }, [])
  return null
}

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            indexe: true,
            path: 'analysis',
            element: loadComp(Analysis)
          },
          {
            path: 'monitor',
            element: loadComp(Monitor)
          },
          {
            path: 'workplace',
            element: loadComp(Workplace)
          }
        ]
      },
      {
        path: 'form',
        children: [
          {
            index: true,
            path: 'base-form',
            element: loadComp(BaseForm)
          },
          {
            path: 'setp-form',
            element: loadComp(StepForm)
          },
          {
            path: 'advanced-form',
            element: loadComp(AdvancedForm)
          }
        ]
      },
      {
        path: 'table',
        children: [
          {
            index: true,
            path: 'base-table',
            element: loadComp(BaseTable)
          },
          {
            path: 'advanced-table',
            element: loadComp(AdvancedTable)
          }
        ]
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
