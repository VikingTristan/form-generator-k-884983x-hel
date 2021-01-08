import {
  companyInformation,
  businessAddress,
  invoiceAddress,
} from './fieldsets'

import createCompanyLookup from './steps/company-lookup'

const checkoutNO = {
  service: 'Checkout',
  country: {
    code: 'NO',
    name: 'Norway',
  },
  partner: '',
  path: '/no/checkout',
  fieldsets: [companyInformation, businessAddress, invoiceAddress],
}
const checkoutSE = {
  service: 'Checkout',
  country: {
    code: 'SE',
    name: 'Sweden',
  },
  partner: '',
  path: '/se/checkout',
  fieldsets: [companyInformation, businessAddress, invoiceAddress],
}

const companyLookupForms = [
  createCompanyLookup('NO'),
  createCompanyLookup('SE'),
]

export { checkoutNO, checkoutSE, companyLookupForms }

const forms = [checkoutNO, checkoutSE]

export default forms
