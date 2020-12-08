const { Router } = require('express')
const forms = require('../data/forms')

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
router.get('/forms/:formId', function (req, res, next) {
  const formId = req.params.formId
  const form = forms.find((form) => form.formId === formId)
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
