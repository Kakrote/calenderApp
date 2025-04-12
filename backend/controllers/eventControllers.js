const Events = require('../models/Event');

// GET all events
const getEvent = async (req, res) => {
  try {
    const events = await Events.find();
    if (!events || events.length === 0) {
      return res.status(404).json({ msg: 'No events found!' });
    }
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error!' });
  }
};


const createEvent = async (req, res) => {
  try {
    console.log('📝 Received body:', req.body);
    const newEvent = new Events(req.body);
    await newEvent.save();
    res.status(201).json({ event: newEvent, msg: 'New event created!' });
  } catch (error) {
    console.error('❌ Error while creating event:', error.message);
    res.status(500).json({ msg: 'Server error!' });
  }
};

// PUT update event (used for resize)
const updateEvent = async (req, res) => {
  try { 
    const id = req.params.id;
    const updatedEvent = await Events.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedEvent) {
      return res.status(404).json({ msg: 'Event not found!' });
    }

    return res.status(200).json(updatedEvent); 
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Server error!' });
  }
};


// DELETE an event
const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    await Events.findByIdAndDelete(id);
    res.status(200).json({ msg: 'Event deleted!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Failed to delete event' });
  }
};

module.exports = { getEvent, createEvent, updateEvent, deleteEvent };
