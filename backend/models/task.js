const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  goalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Goal',
    required: true
  },
  color: { type: String, default: '#3b82f6' },
});

module.exports = mongoose.model('Task', TaskSchema);
