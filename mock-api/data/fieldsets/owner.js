const ownerFieldset = (countryCode) => {
  return {
    legend: countryCode === 'NO' ? 'Eier' : 'Owner',
    fields: [
      {
        id: 'owner',
        label:
          countryCode === 'NO' ? 'Hvilken type eier etc' : 'owner type etc',
        as: 'select',
        options: ['test', { label: 'what', value: 'kek' }],
      },
      {
        id: 'pep',
        label: countryCode === 'NO' ? 'Hvilken type PEP etc' : 'owner type etc',
        as: 'checkbox',
        options: [{ label: 'ey', value: 'ey?' }, 'bob'],
      },
    ],
  }
}

export default ownerFieldset
