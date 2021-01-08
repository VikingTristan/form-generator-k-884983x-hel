// const forms = require('../data/forms')
import forms from '../data/forms'

import { companyLookupForms } from '../data/forms'
const { Router } = require('express')

const router = Router()

router.get('/', function (req, res, next) {
  res.json({
    ok: true,
  })
})

/* GET forms . */
router.get('/forms', function (req, res, next) {
  res.json(forms)
})

/* GET form by ... service? formId?. */
router.get('/forms/:countryCode/:service', function (req, res, next) {
  console.log('Router /forms/:countryCode/:service ran', req.params)
  const { countryCode, service } = req.params
  const form = companyLookupForms.find(
    (form) =>
      form.country.code.toLowerCase() === countryCode.toLowerCase() &&
      form.service.toLowerCase() === service.toLowerCase()
  )
  console.log('Did server find a form?', form)
  if (form) {
    setTimeout(() => {
      res.json(form)
    }, 500)
  } else {
    res.send(404, {
      title: "Couldn't find form",
      status: '404',
      details: "The form you are looking for doesn't exist!",
    })
  }
})

module.exports = router
