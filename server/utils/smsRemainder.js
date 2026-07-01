const twilio = require('twilio');
const Appointment = require('../models/Appointment');

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendReminders = async () => {
    try {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);

        const dayAfter = new Date(tomorrow);
        dayAfter.setDate(dayAfter.getDate() + 1);

        const appointments = await Appointment.find({
            slot: { $gte: tomorrow, $lt: dayAfter },
            reminderSent: false,
            status: 'confirmed'
        }).populate('patient', 'name Contact')
          .populate('doctor', 'name');

        for (const appt of appointments) {
            if (appt.patient.Contact) {
                await client.messages.create({
                    body: `Hello ${appt.patient.name}, reminder: you have an appointment with ${appt.doctor.name} tomorrow at ${appt.slot}.`,
                    from: process.env.TWILIO_PHONE,
                    to: `+91${appt.patient.Contact}`
                });

                appt.reminderSent = true;
                await appt.save();
            }
        }
        console.log(`Reminders sent for ${appointments.length} appointments`);
    } catch (err) {
        console.error('SMS reminder error:', err.message);
    }
};

module.exports = sendReminders;