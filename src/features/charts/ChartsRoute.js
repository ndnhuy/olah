import { lazy } from 'react'

const ChartsRoute = [
  {
    path: '/charts/apex',
    component: lazy(() => import('./apex'))
  },
  {
    path: '/charts/chartjs',
    component: lazy(() => import('./chart-js'))
  },
  {
    path: '/charts/recharts',
    component: lazy(() => import('./recharts'))
  }
]

export default ChartsRoute
