const Doctor = require("../models/Doctor");

exports.addDoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};

exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (doctor) res.json(doctor);
    else res.status(404).json({ message: "Doctor not found" });
  } catch (err) {
    res.status(400).json({ error: "Invalid ID" });
  }
};
