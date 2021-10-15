const User = require('../models/userModel');

exports.GetAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res
      .status(200)
      .json({ status: 'success', results: users.length, data: { users } });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: 'Error' });
  }
};
exports.GetUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ status: 'success', data: { user } });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: 'Error' });
  }
};
exports.PostUser = async (req, res) => {
  try {
    const newuser = await User.create(req.body);
    res.status(201).json({ status: 'success', user: newuser });
  } catch (err) {
    res.status(400).json({ staus: 'failed', message: err });
  }
};

exports.UpdateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: 'success', data: { user } });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: 'Error' });
  }
};
exports.DeleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: 'success', data: null });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: 'Error' });
  }
};
