const Appointment = require("../models/Appointment");

exports.bookAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json({ success: true, message: "Appointment booked successfully!", appointment });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
