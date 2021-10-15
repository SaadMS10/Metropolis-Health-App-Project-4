const Treatment = require('../models/treatmentModel');
const jwt = require('jsonwebtoken');
const Appointment = require('../models/appointmentModel');
exports.GetAlltreatments = async (req, res) => {
  try {
    const treatments = await Treatment.find();
    res.status(200).json({
      status: 'success',
      results: treatments.length,
      data: { treatments },
    });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: 'Error' });
  }
};
exports.Gettreatment = async (req, res) => {
  try {
    const treatment = await Treatment.findById(req.params.id);

    res.status(200).json({ status: 'success', data: { treatment } });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: 'Error' });
  }
};
exports.Posttreatment = async (req, res) => {
  try {
    const appointment = await Appointment.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { Status: 'Done' } }
    );
    const newtreatment = await Treatment.create({
      appointmentId: appointment._id,
      treatment: req.body.treatment,
    });

    res.status(201).json({
      status: 'success',
      treatment: newtreatment,
      appointmentStatus: appointment.Status,
    });
  } catch (err) {
    res.status(400).json({ staus: 'failed', message: err });
  }
};

exports.Updatetreatment = async (req, res) => {
  try {
    const treatment = await Treatment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({ status: 'success', data: { treatment } });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: 'Error' });
  }
};
exports.Deletetreatment = async (req, res) => {
  try {
    const treatment = await Treatment.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: 'success', data: null });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: 'Error' });
  }
};
