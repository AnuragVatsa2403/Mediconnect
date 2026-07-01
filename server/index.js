const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const auth= require('./routes/auth');
const appointmentRoutes = require('./routes/appointmentRoutes');
const doctorRoutes= require('./routes/doctorRoutes');
const cron = require('node-cron');
const sendReminders = require('./utils/smsReminder');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => {
  res.json({ message: 'MediConnect API is running 🚀' });
});

cron.schedule('0 9 * * *', () => {
    console.log('Running SMS reminders...');
    sendReminders();
});

app.use('/api/auth', auth);

app.use('/api/appointments', appointmentRoutes);
app.use('/api/doctors', doctorRoutes);



const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
