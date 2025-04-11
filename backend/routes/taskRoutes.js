const express = require('express');
const router = express.Router();
const { getTasksByGoal,createTask,deleteTask } = require('../controllers/taskController');

router.get('/:goalId', getTasksByGoal);
router.post('/',createTask)
router.delete('/:id',deleteTask)

module.exports = router;
