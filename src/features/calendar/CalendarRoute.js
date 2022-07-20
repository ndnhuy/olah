import { lazy } from 'react'

const CalendarRoute = [
  {
    path: '/apps/calendar',
    component: lazy(() => import('@src/features/calendar'))
  }
]

export default CalendarRoute
