import { lazy } from 'react'

const PermissionRoute = [
    {
        path: '/apps/permissions',
        component: lazy(() => import('../../features/permissions'))
    }
]

export default PermissionRoute