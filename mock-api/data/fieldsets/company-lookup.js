const companyLookupFieldset = (countryCode) => {
  return {
    legend: countryCode === 'NO' ? 'Firmaoppslag' : 'Företagssökning',
    fields: [
      {
        id: 'company-lookup',
        label: countryCode === 'NO' ? 'Firmanavn' : 'Företagssnamn',
        as: 'input',
      },
    ],
  }
}

export default companyLookupFieldset
