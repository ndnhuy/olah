// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import todo from '@src/features/todo/store'
import chat from '@src/features/chat/store'
import users from '@src/features/user/store'
import email from '@src/features/email/store'
import invoice from '@src/features/invoice/store'
import calendar from '@src/features/calendar/store'
import ecommerce from '@src/features/ecommerce/store'
import dataTables from '@src/views/tables/data-tables/store'
import permissions from '@src/features/roles-permissions/store'

const rootReducer = {
  auth,
  todo,
  chat,
  email,
  users,
  navbar,
  layout,
  invoice,
  calendar,
  ecommerce,
  dataTables,
  permissions
}

export default rootReducer
