// Utility functions commonly used by other files
// Setup local social security number and organization number validation rules [THN]
const createCheckDigitValidationRules = (country, type) => {
  let language, regex

  if (country) language = country.code
  else language = window.currentLanguageTag

  if (!language) language = 'NO'

  if (language === 'NO' || language === 'nb-NO') {
    if (type === 'social-security-number') regex = '^\\d{11}$'
    else if (type === 'organization-number') regex = '^\\d{9}$'
    else console.warn('Unknown type when setting up digit rules. utils.js')
  } else if (language === 'SE' || language === 'sv-SE')
    regex = '^\\d([-]?\\d){9}$'
  else regex = '^.{1,200}$'

  return { required: true, regex }
}
// Setup local postal code validation rules [THN]
const createPostalCodeValidationRules = (country) => {
  let language, regex

  if (country) language = country.code
  else language = window.currentLanguageTag

  if (!language) language = 'NO'

  if (language === 'NO' || language === 'nb-NO') regex = '^[0-9]{4}$'
  else if (language === 'SE' || language === 'sv-SE') regex = '^[0-9]{5}$'
  else regex = '^.{1,200}$'

  return { required: true, regex }
}

export { createCheckDigitValidationRules, createPostalCodeValidationRules }
