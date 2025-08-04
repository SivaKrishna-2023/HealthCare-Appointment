const express = require('express')
const cors = require('cors')
const connentDB = require("./config/db");
require("dotenv").config();

const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes")

const app = express()
const PORT = 5000
connentDB()
app.use(cors())
app.use(express.json())

app.use("/api/doctors", doctorRoutes);
app.use("/api/book", appointmentRoutes)


app.listen(PORT, () =>{
    console.log(`Server running on localhost ${PORT}`)
})