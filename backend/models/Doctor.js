const mongoose = require('mongoose')


const doctorSchema = new mongoose.Schema({
    name: String,
    specialization: String,
    profile: String,
    available: Boolean,
    details: String,
})

module.exports = mongoose.model("Doctor", doctorSchema)