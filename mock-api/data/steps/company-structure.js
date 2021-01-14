import { ownerFieldset } from '../fieldsets'
const createCompanyStructureForm = (countryCode, service) => {
  let country, path, step

  switch (countryCode) {
    case 'NO':
      country = {
        code: 'NO',
        name: 'Norway',
      }
      path = `/no/${service}/selskapsstruktur`
      step = {
        id: 'company-structure',
        name: 'selskapsstruktur',
      }
      break
    case 'SE':
      country = {
        code: 'SE',
        name: 'Sweden',
      }
      path = `/se/${service}/selskapsstruktur`
      step = {
        id: 'company-structure',
        name: 'selskapsstruktur',
      }
      break
    default:
      country = {
        code: 'NO',
        name: 'Norway',
      }
      path = `/no/${service}/selskapsstruktur`
      step = {
        id: 'company-structure',
        name: 'selskapsstruktur',
      }
      break
  }
  return {
    service,
    partner: '',
    country,
    path,
    step,
    fieldsets: [ownerFieldset(countryCode)],
  }
}

export default createCompanyStructureForm
