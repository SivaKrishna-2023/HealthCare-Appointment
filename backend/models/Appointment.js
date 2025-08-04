const mongoose = require("mongoose");


const appointmentSchema = new mongoose.Schema({
    name: String,
    email: String,
    dateTime: String,
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
  },
})

module.exports = mongoose.model("Appointment", appointmentSchema)