const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/authenticate', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  if (req.session.data['username'] == 'admin') {
    res.redirect('dashboard')
  } else {
    res.redirect('/')
  }
})

module.exports = router
