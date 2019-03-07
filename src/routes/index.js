import Home from '../pages/Home.vue'
import MasterPart from '../pages/MasterPart.vue'
import MasterSupplier from '../pages/MasterSupplier.vue'
import PartForm from '../pages/PartForm.vue'
import SupplierForm from '../pages/SupplierForm.vue'
import PurchaseForm from '../pages/PurchaseForm.vue'
import ImportPurchasesFromExcel from '../pages/ImportPurchasesFromExcel.vue'
import ReportPeriodPurchases from '../pages/ReportPeridPurchases.vue'
import Login from '../pages/Login.vue'
import NotFound from '../components/NotFound.vue'

const routes = [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/master/part',
  name: 'masterPart',
  component: MasterPart
},
{
  path: '/master/supplier',
  name: 'masterSupplier',
  component: MasterSupplier
},
{
  path: '/forms/part',
  name: 'partForm',
  component: PartForm
},
{
  path: '/forms/supplier',
  name: 'supplierForm',
  component: SupplierForm
},
{
  path: '/forms/purchase',
  name: 'purchaseForm',
  component: PurchaseForm
},
{
  path: '/login',
  name: 'login',
  meta: {
    guest: true
  },
  component: Login
},
{
  path: '/ImportPurchasesFromExcel',
  name: 'ImportPurchasesFromExcel',
  component: ImportPurchasesFromExcel
},
{
  path: '/reportPeriodPurchases',
  name: 'reportPeriodPurchases',
  component: ReportPeriodPurchases
},
{
  path: '*',
  component: NotFound
}
]

export default {
  items: routes,
  login: 'login',
  home: 'home'
}
