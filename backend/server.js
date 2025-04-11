const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');
const goalroutes=require('./routes/goalRoutes')
const taskRoutes=require('./routes/taskRoutes')
dotenv.config();
connectDB();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

// Route
app.use('/api/event', eventRoutes);
app.use('/api/goal',goalroutes)
app.use('/api/task',taskRoutes)

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
