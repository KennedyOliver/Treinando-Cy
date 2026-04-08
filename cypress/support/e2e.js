Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Minified React error')) {
    return false
  }
})

import './commands'
import 'cypress-xpath'