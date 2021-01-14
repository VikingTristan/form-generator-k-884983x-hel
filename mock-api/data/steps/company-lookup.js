import { companyLookupFieldset } from '../fieldsets'
const createCompanyLookupForm = (countryCode, service) => {
  let country, path, step

  switch (countryCode) {
    case 'NO':
      country = {
        code: 'NO',
        name: 'Norway',
      }
      path = '/no/checkout/firmaoppslag'
      step = {
        id: 'company-lookup',
        name: 'firmaoppslag',
      }
      break
    case 'SE':
      country = {
        code: 'SE',
        name: 'Sweden',
      }
      path = '/se/checkout/företagssökning'
      step = {
        id: 'company-lookup',
        name: 'företagssökning',
      }
      break
    default:
      country = {
        code: 'NO',
        name: 'Norway',
      }
      path = '/no/checkout/firmaoppslag'
      step = {
        id: 'company-lookup',
        name: 'firmaoppslag',
      }
      break
  }
  return {
    service,
    partner: '',
    country,
    path,
    step,
    fieldsets: [companyLookupFieldset(countryCode)],
  }
}

export default createCompanyLookupForm
