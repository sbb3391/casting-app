const express = require('express')
const castingRolesRouter = require('../routes/castingRoles')
const questionsRouter = require('./questions')
const router = express.Router({ mergeParams: true})

const { getCastings, createCasting, getCasting, updateCasting, removeCastingRoleReferences} = require('../controllers/castings');
const { createCastingQuestion } = require('../controllers/question')

router.route('/').get(getCastings).post(createCasting);
router.route('/:castingId').get(getCasting).patch(updateCasting);
router.route('/:castingId/removeCastingRoles').get(removeCastingRoleReferences)
router.use('/:castingId/castingRoles', castingRolesRouter);
router.route('/:castingId/questions').post(createCastingQuestion)

module.exports = router;