const Booking = require('../models/bookingModel');

exports.GetAllbookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({
      status: 'success',
      results: bookings.length,
      data: { bookings },
    });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: 'Error' });
  }
};
exports.Getbooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    res.status(200).json({ status: 'success', data: { booking } });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: 'Error' });
  }
};
exports.Postbooking = async (req, res) => {
  try {
    const newbooking = await Booking.create(req.body);

    res.status(201).json({ status: 'success', booking: newbooking });
  } catch (err) {
    res.status(400).json({ staus: 'failed', message: err });
  }
};

exports.Updatebooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ status: 'success', data: { booking } });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: 'Error' });
  }
};
exports.Deletebooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    res.status(204).json({ status: 'success', data: null });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: 'Error' });
  }
};
