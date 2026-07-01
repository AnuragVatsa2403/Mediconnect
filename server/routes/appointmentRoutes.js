const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { bookAppointment, getMyAppointments, getDoctorAppointments, updateAppointmentStatus } = require('../controllers/appointmentController');

router.post('/', protect, bookAppointment);
router.get('/my', protect, getMyAppointments);
router.get('/doctor', protect, getDoctorAppointments);
router.put('/:id/status', protect, updateAppointmentStatus);

module.exports = router;
