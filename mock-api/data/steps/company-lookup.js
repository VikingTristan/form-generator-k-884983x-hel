import companyLookupFieldset from '../fieldsets/company-lookup'
const createCompanyLookup = (countryCode) => {
  let country, path

  switch (countryCode) {
    case 'NO':
      country = {
        code: 'NO',
        name: 'Norway',
      }
      path = '/no/checkout/firmaoppslag'
      break
    case 'SE':
      country = {
        code: 'SE',
        name: 'Sweden',
      }
      path = '/se/checkout/företagssökning'
      break
    default:
      country = {
        code: 'NO',
        name: 'Norway',
      }
      path = '/no/checkout/firmaoppslag'
      break
  }
  return {
    service: 'Checkout',
    partner: '',
    country,
    path,
    fieldsets: [companyLookupFieldset(countryCode)],
  }
}

export default createCompanyLookup
