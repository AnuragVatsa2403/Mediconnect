const User= require('../models/User');

const getDoctor = async (req, res) => {
    try {
        const { location, specialization } = req.query;
        
        const filter = { role: 'doctor', isVerified: true };
        
        if (location) filter.location = location;
        if (specialization) filter.specialization = specialization;
        
        const doctors = await User.find(filter);
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getDoctorbyId= async(req, res)=>{
    try{
        const doctorbyId= await User.findById(req.params.id);
        res.json(doctorbyId);
    } catch(err){
        res.status(500).json({message: err.message});
    }
}

const updateAvailability = async (req, res) => {
    try {
        const { availableSlots } = req.body;
        const doctor = await User.findByIdAndUpdate(
            req.user.id,
            { availableSlots },
            { new: true }
        );
        res.json(doctor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const verifyDoctor = async (req, res) => {
    try {
        const doctor = await User.findByIdAndUpdate(
            req.params.id,
            { isVerified: true },
            { new: true }
        );
        res.json(doctor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports= {getDoctor, getDoctorbyId, updateAvailability, verifyDoctor};