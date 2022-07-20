import { lazy } from 'react'

const TodoRoute = [
    {
        path: '/apps/todo',
        exact: true,
        appLayout: true,
        className: 'todo-application',
        component: lazy(() => import('../../features/todo'))
    },
    {
        path: '/apps/todo/:filter',
        appLayout: true,
        exact: true,
        className: 'todo-application',
        component: lazy(() => import('../../features/todo')),
        meta: {
            navLink: '/apps/todo'
        }
    },
    {
        path: '/apps/todo/tag/:tag',
        appLayout: true,
        className: 'todo-application',
        component: lazy(() => import('../../features/todo')),
        meta: {
            navLink: '/apps/todo'
        }
    }
]

export default TodoRoute