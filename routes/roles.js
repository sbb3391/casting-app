const express = require('express')
const router = express.Router()

const { getRoles, createRole, removeCastingRoleRefs } = require('../controllers/roles');

router.route('/').get(getRoles).post(createRole);
router.route('/removeCastingRoleRefs').get(removeCastingRoleRefs)

module.exports = router;