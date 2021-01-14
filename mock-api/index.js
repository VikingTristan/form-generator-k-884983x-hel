const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

// Mock API routes
const forms = require('./routes/forms')
app.use(forms)

// Export mock api server middleware
module.exports = {
  path: '/api',
  handler: app,
}
