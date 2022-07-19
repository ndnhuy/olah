import { lazy } from 'react'

const DashboardRoute = [
  // Dashboards
  {
    path: '/dashboard/analytics',
    component: lazy(() => import('@src/features/dashboard/analytics'))
  },
  {
    path: '/dashboard/ecommerce',
    component: lazy(() => import('@src/features/dashboard/ecommerce')),
    exact: true
  }
]

export default DashboardRoute
