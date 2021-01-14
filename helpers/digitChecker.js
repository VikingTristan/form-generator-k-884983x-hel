function checkDigitSwe(nr) {
  const cleanNumber = nr.replace('-', '')

  let nn = ''

  for (let n = 0; n < cleanNumber.length; n++) {
    nn += (((n + 1) % 2) + 1) * cleanNumber.substring(n, n + 1)
  }

  let checksum = 0

  for (let n = 0; n < nn.length; n++) {
    checksum += nn.substring(n, n + 1) * 1
  }

  return checksum % 10 === 0
}

function checkDigitNor(nr) {
  const numbersToControl = nr.substring(0, nr.length - 1)
  const controlDigit = nr.substring(nr.length - 1)
  let checksum = 0

  for (let i = numbersToControl.length - 1, Multiplier = 2; i >= 0; i--) {
    checksum += numbersToControl[i] * Multiplier

    if (++Multiplier === 8) Multiplier = 2
  }
  let validator = 11 - (checksum % 11)

  if (validator === '11') validator = '0'
  else if (validator === '10') validator = 'X'

  return controlDigit === validator
}

function validateCheckDigits(type, countryCode, value) {
  let isValid = true

  if (countryCode === 'SE' || countryCode === 'sv-SE') {
    const val = value.split('-').join('')

    // Only do checkdigit for swedish org numbers at 10
    if (val && val.length === 10) {
      isValid = checkDigitSwe(val)
    }
  } else if (countryCode === 'NO' || countryCode === 'nb-NO') {
    if (type === 'organization-number' && value && value.length === 9) {
      isValid = checkDigitNor(value)
    } else if (
      type === 'social-security-number' &&
      value &&
      value.length === 11
    ) {
      isValid = checkDigitNor(value)
    }
  }

  return isValid
}

export { validateCheckDigits }
