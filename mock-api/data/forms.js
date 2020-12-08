import {
  companyInformation,
  businessAddress,
  invoiceAddress,
} from './fieldsets'
const forms = [
  {
    service: 'Checkout',
    countryName: 'Sweden',
    partner: 'Viking Gruppen',
    to: '',
    fieldsets: [companyInformation, businessAddress, invoiceAddress],
  },
]

module.exports = forms
