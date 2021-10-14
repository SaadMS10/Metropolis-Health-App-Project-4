const Appointment = require('../models/appointmentModel');

exports.GetAllappointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json({
      status: 'success',
      results: appointments.length,
      data: { appointments },
    });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: 'Error' });
  }
};
exports.Getappointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    res.status(200).json({ status: 'success', data: { appointment } });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: 'Error' });
  }
};
exports.Postappointment = async (req, res) => {
  try {
    const newappointment = await Appointment.create(req.body);

    res.status(201).json({ status: 'success', appointment: newappointment });
  } catch (err) {
    res.status(400).json({ staus: 'failed', message: err });
  }
};

exports.Updateappointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({ status: 'success', data: { appointment } });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: 'Error' });
  }
};
exports.Deleteappointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);

    res.status(204).json({ status: 'success', data: null });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: 'Error' });
  }
};
