const express = require('express')
const router = express.Router()

const { getRoleQuestions, createRoleQuestion, getRoleQuestion, updateRoleQuestion, deleteRoleQuestion } = require('../controllers/roleQuestions');

router.route('/').get(getRoleQuestions).post(createRoleQuestion);
router.route('/:id').get(getRoleQuestion).patch(updateRoleQuestion).delete(deleteRoleQuestion);

module.exports = router;