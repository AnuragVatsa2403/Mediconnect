const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const auth= require('./routes/auth');
const appointmentRoutes = require('./routes/appointmentRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => {
  res.json({ message: 'MediConnect API is running 🚀' });
});

app.use('/api/auth', auth);

app.use('/api/appointments', appointmentRoutes);



const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
