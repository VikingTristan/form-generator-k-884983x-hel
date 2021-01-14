const invoiceAddressFieldset = () => {
  return {
    legend: 'Faktureringsadresse',
    fields: [
      {
        id: 'invoice-address',
        label: 'Adresse',
        as: 'text',
      },
      {
        id: 'invoice-postal-code',
        label: 'Postnummer',
        class: 'col-md-6',
        as: 'postal-code',
      },
      {
        id: 'invoice-city',
        label: 'Poststed',
        class: 'col-md-6',
        as: 'text',
      },
    ],
  }
}

export default invoiceAddressFieldset
