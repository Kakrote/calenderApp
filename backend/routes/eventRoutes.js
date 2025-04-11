const express = require('express');
const router = express.Router();
const { getEvent, createEvent, updateEvent, deleteEvent } = require('../controllers/eventControllers');

// Check if route hit
router.post('/', (req, res, next) => {
  console.log('🔥 POST /api/event route HIT');
  next();
}, createEvent);

router.get('/', getEvent);
router.put('/:id', updateEvent);
router.delete('/:id',deleteEvent)


module.exports = router;
