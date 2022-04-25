const express = require('express')
const router = express.Router({mergeParams: true})

const { getCastingQuestions, createCastingQuestions } = require('../controllers/castingQuestions');

router.route('/').get(getCastingQuestions).post(createCastingQuestions);

module.exports = router;