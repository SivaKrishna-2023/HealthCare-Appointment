const express = require("express");
const router = express.Router();

const {
    addDoctor,
    getDoctors,
    getDoctorById
} = require("../controllers/doctorController");

router.post("/", addDoctor);
router.get("/", getDoctors);
router.get("/:id", getDoctorById);

module.exports = router;