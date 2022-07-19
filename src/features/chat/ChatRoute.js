import { lazy } from 'react'

const ChatRoute = [
  {
    path: '/apps/chat',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../features/chat'))
  }
]

export default ChatRoute
