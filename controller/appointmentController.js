const Appointment = require('../models/appointmentModel');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

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
    const doctor = await User.findOne({ role: 'doctor' });
    console.log(`Doctor: ${doctor.name}`);
    const token = req.headers.authorization;
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const newappointment = await Appointment.create({
      patientId: decoded.id,
      doctorId: doctor._id,
      time: req.body.time,
    });

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
