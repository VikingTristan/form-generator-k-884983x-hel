import {
  companyInformationFieldset,
  businessAddressFieldset,
  invoiceAddressFieldset,
} from '../fieldsets'
const createRegistrationForm = (countryCode, service) => {
  let country, path

  switch (countryCode) {
    case 'NO':
      country = {
        code: 'NO',
        name: 'Norway',
      }
      path = `/no/${service}/registrering`
      break
    case 'SE':
      country = {
        code: 'SE',
        name: 'Sweden',
      }
      path = `/se/${service}/registrering`
      break
    default:
      country = {
        code: 'NO',
        name: 'Norway',
      }
      path = `/no/${service}/registrering`
      break
  }

  return {
    service,
    partner: '',
    country,
    path,
    step: {
      id: 'registration',
      name: 'registrering',
    },
    fieldsets: [
      companyInformationFieldset(countryCode),
      invoiceAddressFieldset(),
      businessAddressFieldset(),
    ],
  }
}

export default createRegistrationForm
