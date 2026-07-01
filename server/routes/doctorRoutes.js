const express= require('express');
const router= express.Router();
const {getDoctor, getDoctorbyId, updateAvailability}= require('../controllers/doctorController');
const { protect } = require('../middleware/authMiddleware');
const { protect, isAdmin } = require('../middleware/authMiddleware');

router.get('/', getDoctor);
router.get('/:id', getDoctorbyId);
router.put('/availability', protect, updateAvailability);
router.get('/pending', protect, isAdmin, getPendingDoctors);
router.put('/:id/verify', protect, isAdmin, verifyDoctor);

module.exports= router; 