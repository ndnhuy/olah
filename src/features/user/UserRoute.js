import { lazy } from 'react'

const UserRoute = [
    {
        path: '/apps/user/list',
        component: lazy(() => import('../../features/user/list'))
      },
      {
        path: '/apps/user/view',
        exact: true,
        component: () => <Redirect to='/apps/user/view/1' />
      },
      {
        path: '/apps/user/view/:id',
        component: lazy(() => import('../../features/user/view')),
        meta: {
          navLink: '/apps/user/view'
        }
      }
]

export default UserRoute