const express = require('express')
const router = express.Router({mergeParams: true})

const { getCastingRoles, getCastingRole, createCastingRole, deleteCastingRole, deleteAllCastingRoles, testing } = require('../controllers/castingRoles');
const { createCastingRoleQuestion } = require('../controllers/question')

router.route('/').get(getCastingRoles).post(createCastingRole).delete(deleteAllCastingRoles);
router.route('/:castingRoleId').get(getCastingRole).delete(deleteCastingRole);
router.route('/:castingRoleId/questions').post(createCastingRoleQuestion)
module.exports = router;