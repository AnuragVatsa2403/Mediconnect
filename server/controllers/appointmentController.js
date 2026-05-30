const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');
const User = require('../models/User');

const bookAppointment=async(req, res) =>{
    try{
    const { doctorId, slot } = req.body;
    const patientId = req.user.id;
    const conflict= await Appointment.findOne({ doctor: doctorId, slot: slot });
    if (conflict) return res.status(400).json({message: 'Slot already booked'});
    const appointment = await Appointment.create({
        patient: patientId,
        doctor: doctorId,
        slot: slot
    });
    return res.status(201).json(appointment);
}catch(err){
    res.status(500).json({message: err.message});
}
}

const getMyAppointments= async(req, res)=>{
    try{
    const appointments = await Appointment.find({ patient: req.user.id })
    res.json(appointments)
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

const getDoctorAppointments= async(req, res)=>{
    try{
        const appointments= await Appointment.find({doctor: req.user.id})
        res.json(appointments)
    } catch(err){
        res.status(500).json({message: err.message});

    }
}

const updateAppointmentStatus= async(req, res)=>{
    try{
        const {id}= req.params;
        const {status}= req.body;
        const appointment= await Appointment.findByIdAndUpdate(id, {status}, {new: true});
        res.json(appointment);
    } catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports= {bookAppointment, updateAppointmentStatus, getDoctorAppointments, getMyAppointments}