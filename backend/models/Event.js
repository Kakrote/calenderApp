const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    category: { type: String },
    color: { type: String },
    
})

module.exports=mongoose.model('Event',EventSchema)