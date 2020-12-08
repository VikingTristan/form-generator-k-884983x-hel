const express = require('express')
const app = express()

// Mock API routes
const forms = require('./routes/forms')
app.use(forms)

// Export mock api server middleware
module.exports = {
  path: '/api',
  handler: app,
}
