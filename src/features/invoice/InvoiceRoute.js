import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const InvoiceRoute = [
    {
        path: '/apps/invoice/list',
        component: lazy(() => import('@src/features/invoice/list'))
    },
    {
    path: '/apps/invoice/preview/:id',
    component: lazy(() => import('@src/features/invoice/preview')),
    meta: {
        navLink: '/apps/invoice/preview'
    }
    },
    {
    path: '/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/apps/invoice/preview/4987' />
    },
    {
    path: '/apps/invoice/edit/:id',
    component: lazy(() => import('@src/features/invoice/edit')),
    meta: {
        navLink: '/apps/invoice/edit'
    }
    },
    {
    path: '/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/apps/invoice/edit/4987' />
    },
    {
    path: '/apps/invoice/add',
    component: lazy(() => import('@src/features/invoice/add'))
    },
    {
    path: '/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('@src/features/invoice/print'))
    }
]

export default InvoiceRoute
