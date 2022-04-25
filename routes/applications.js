const express = require('express')
const router = express.Router()

const { getApplications, createApplication } = require('../controllers/applications');

router.route('/').get(getApplications).post(createApplication);

module.exports = router;