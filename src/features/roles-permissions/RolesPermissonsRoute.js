import { lazy } from 'react'

const RolesPermissonsRoute = [
    {
        path: '/apps/roles',
        component: lazy(() => import('../../features/roles-permissions/roles'))
    }
]

export default RolesPermissonsRoute