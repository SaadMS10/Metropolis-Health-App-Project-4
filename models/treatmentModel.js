const mongoose = require('mongoose');

const treatmentSchema = new mongoose.Schema({
  appointmentId: {
    type: String,
    required: [true, 'Please provide Appointment ID'],
  },
  treatment: {
    type: String,
    required: [true, 'Please provide  how you treated'],
  },
});

const Treatment = mongoose.model('treatment', treatmentSchema);

module.exports = Treatment;
