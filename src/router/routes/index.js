// ** Routes Imports
import AppRoutes from './Apps'
import FormRoutes from './Forms'
import PagesRoutes from './Pages'
import TablesRoutes from './Tables'
import ChartsRoute from '@src/features/charts/ChartsRoute'
import DashboardRoute from '@src/features/dashboard/DashboardRoute'
import EmailRoute from '@src/features/email/EmailRoute'
import CalendarRoute from '@src/features/calendar/CalendarRoute'
import ChatRoute from '@src/features/chat/ChatRoute'
import EcommerceRoute from '@src/features/ecommerce/EcommerceRoute'
import InvoiceRoute from '@src/features/invoice/InvoiceRoute'
import PermissionRoute from '@src/features/permissions/PermissionRoute'
import RolesPermissonsRoute from '@src/features/roles-permissions/RolesPermissonsRoute'
import TodoRoute from '@src/features/todo/TodoRoute'
import UserRoute from '@src/features/user/UserRoute'
import UiElementRoutes from './UiElements'
import ExtensionsRoutes from './Extensions'
import PageLayoutsRoutes from './PageLayouts'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/dashboard/ecommerce'

// ** Merge Routes
const Routes = [
  ...DashboardRoute,
  ...EmailRoute,
  ...CalendarRoute,
  ...ChatRoute,
  ...EcommerceRoute,
  ...InvoiceRoute,
  ...PermissionRoute,
  ...RolesPermissonsRoute,
  ...TodoRoute,
  ...UserRoute,
  ...AppRoutes,
  ...PagesRoutes,
  ...UiElementRoutes,
  ...ExtensionsRoutes,
  ...PageLayoutsRoutes,
  ...FormRoutes,
  ...TablesRoutes,
  ...ChartsRoute
]

export { DefaultRoute, TemplateTitle, Routes }
