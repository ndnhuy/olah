import { lazy } from 'react'

const CalendarRoute = [
  {
    path: '/apps/calendar',
    component: lazy(() => import('../../features/calendar'))
  }
]

export default CalendarRoute
