const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: String,
  },
  doctorId: {
    type: String,
  },
  time: {
    type: Date,
    required: [true, 'Please provide your time'],
  },
  Status: {
    type: String,
    default: 'Pending',
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
