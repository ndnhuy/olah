// ** Routes Imports
import AppRoutes from './Apps'
import FormRoutes from './Forms'
import PagesRoutes from './Pages'
import TablesRoutes from './Tables'
import ChartsRoutes from './Charts'
import DashboardRoute from '@src/features/dashboard/DashboardRoute'
import EmailRoute from '@src/features/email/EmailRoute'
import CalendarRoute from '@src/features/calendar/CalendarRoute'
import ChatRoute from '@src/features/chat/ChatRoute'
import EcommerceRoute from '@src/features/ecommerce/EcommerceRoute'
import InvoiceRoute from '@src/features/invoice/InvoiceRoute'
import PermissionRoute from '@src/features/permissions/PermissionRoute'
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
  ...AppRoutes,
  ...PagesRoutes,
  ...UiElementRoutes,
  ...ExtensionsRoutes,
  ...PageLayoutsRoutes,
  ...FormRoutes,
  ...TablesRoutes,
  ...ChartsRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
