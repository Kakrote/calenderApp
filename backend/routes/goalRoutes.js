const express = require('express');
const router = express.Router();
const { getGoals,createGoals,deleteGoal } = require('../controllers/goalControllers');

router.get('/', getGoals);
router.post('/', createGoals);
router.delete('/:id',deleteGoal)

module.exports = router;
