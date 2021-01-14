const companyInformationFieldset = () => {
  return {
    legend: 'Generell firmainformasjon',
    fields: [
      {
        id: 'organization-number',
        label: 'Organisasjonsnummer',
        // helpBlock: 'Hjelpetekst...',
        class: 'col-md-6',
        as: 'organization-number',
      },
      {
        id: 'company-name',
        label: 'Firmanavn',
        class: 'col-md-6',
        as: 'text',
      },
    ],
  }
}
export default companyInformationFieldset
