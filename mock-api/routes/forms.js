import { forms, companyLookupForms } from '../data/forms'
const { Router } = require('express')

const router = Router()

router.get('/', function (req, res, next) {
  res.json({
    ok: true,
  })
})

/* GET forms . */
router.get('/forms', function (req, res, next) {
  // Just respond with "first step" forms (company lookup)
  res.json(companyLookupForms)
})

/* GET form by ... country code and service? */
router.get('/forms/:countryCode/:service', function (req, res, next) {
  const { countryCode, service } = req.params
  const form = companyLookupForms.find(
    (form) =>
      form.country.code.toLowerCase() === countryCode.toLowerCase() &&
      form.service.toLowerCase() === service.toLowerCase()
  )

  if (form) {
    setTimeout(() => {
      res.json(form)
    }, 500)
  } else {
    res.send(404, {
      title: "Couldn't find form",
      status: '404',
      details: `The form you are looking for doesn't exist! Tried to find a form with service '${service}' and language '${countryCode}'`,
    })
  }
})

router.get('/forms/:countryCode/:service/:step', function (req, res, next) {
  const { countryCode, service, step } = req.params
  const form = forms.find(
    (form) =>
      form.country.code.toLowerCase() === countryCode.toLowerCase() &&
      form.service.toLowerCase() === service.toLowerCase() &&
      form.step.name.toLowerCase() === step.toLowerCase()
  )
  if (form) {
    res.json(form)
  } else {
    res.status(404).send({
      title: "Couldn't find form",
      status: '404',
      details: `The form you are looking for doesn't exist! \n Tried to find a form with service '${service}', language '${countryCode}', and step '${step}'`,
    })
  }
})

router.post('/forms/:countryCode/:service/:step', (req, res) => {
  const { countryCode, service, step } = req.params

  let url

  // Pretend to validate fields from req.body here I guess...

  switch (step) {
    case 'firmaoppslag':
    case 'företagssökning':
      url = `/${countryCode}/${service}/registrering`
      break
    case 'registrering':
      url = `/${countryCode}/${service}/selskapsstruktur`
      break
    default:
      url = `/${countryCode}/${service}/thanks`
      break
  }

  res.status(200).send({ url })
})

module.exports = router
