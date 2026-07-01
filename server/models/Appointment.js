const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    slot: { type: Date, required: true },
    status: {
      type: String,
      enum: ['Pending', 'Confirmed', 'Cancelled'],
      default: 'Pending'
    },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' }
})


module.exports = mongoose.model('Appointment', appointmentSchema);