const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  appointmentId: {
    type: String,
  },
  doctorId: {
    type: String,
    required: [true, 'Please provide  how you treated'],
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
