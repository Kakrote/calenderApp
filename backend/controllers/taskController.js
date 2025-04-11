const Task = require('../models/task');

const getTasksByGoal = async (req, res) => {
  const { goalId } = req.params;
  try {
    const tasks = await Task.find({ goalId });
    res.status(200).json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Failed to fetch tasks' });
  }
};

const createTask = async (req, res) => {
    try {
      const task = new Task(req.body);
      await task.save();
      res.status(201).json({ task, msg: 'Task created!' });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Task creation failed' });
    }
  };

  const deleteTask = async (req, res) => {
    try {
      const { id } = req.params;
      await Task.findByIdAndDelete(id);
      res.status(200).json({ msg: 'Task deleted' });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Delete failed' });
    }
  };

module.exports = { getTasksByGoal,createTask,deleteTask };
