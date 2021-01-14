const companyLookupFieldset = (countryCode) => {
  return {
    legend: countryCode === 'NO' ? 'Firmaoppslag' : 'Företagssökning',
    fields: [
      {
        id: 'company-name',
        label: countryCode === 'NO' ? 'Firmanavn' : 'Företagssnamn',
        as: 'text',
      },
    ],
  }
}

export default companyLookupFieldset
