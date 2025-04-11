const Events=require('../models/Event')

const getEvent=async (req,res)=>{
    try{
        const event=await Events.find()
        if(!event || event.length===0){
            res.status(404).json({mssg:"no event found!"})
        }
        res.status(200).json(event)
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg:"server error !"})
    }
}

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

const updateEvent=async (req,res)=>{
    try{
        const id=req.params.id
        const updatedEvent=await Events.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({msg:"Event updated!"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:"server Error !"})
    }
}

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

module.exports={getEvent,createEvent,updateEvent,deleteEvent}

