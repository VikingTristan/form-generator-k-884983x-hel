const businessAddressFieldset = () => {
  return {
    legend: 'Forretningsadresse',
    fields: [
      {
        id: 'business-address',
        label: 'Adresse',
        as: 'text',
      },
      {
        id: 'business-postal-code',
        label: 'Postnummer',
        as: 'postal-code',
      },
      {
        id: 'business-bob',
        label: 'Bob',
        as: 'postal-code',
      },
      {
        id: 'business-city',
        label: 'Poststed',
        as: 'text',
      },
    ],
  }
}

export default businessAddressFieldset
