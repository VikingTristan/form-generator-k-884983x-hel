import {
  createCompanyLookupForm,
  createCompanyStructureForm,
  createRegistrationForm,
} from './steps'

const companyLookupForms = [
  createCompanyLookupForm('NO', 'checkout'),
  createCompanyLookupForm('SE', 'checkout'),
]

const registrationForms = [
  createRegistrationForm('NO', 'checkout'),
  createRegistrationForm('SE', 'checkout'),
]

const companyStructureForms = [
  createCompanyStructureForm('NO', 'checkout'),
  createCompanyStructureForm('SE', 'checkout'),
]

const forms = [
  ...companyLookupForms,
  ...registrationForms,
  ...companyStructureForms,
]

export { forms, companyLookupForms, registrationForms, companyStructureForms }
