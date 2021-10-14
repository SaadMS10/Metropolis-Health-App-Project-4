const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email');
const { promisify } = require('util');

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      role: req.body.role,
    });
    const token = jwt.sign(
      { id: newUser.email, status: true },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );
    // const verifyURL = `${req.protocol}://${req.get(
    //   'host'
    // )}/healthclinicapi/v1/users/authenticate/${token}`;
    // const message = `Send A request to this URL to verify your Account : ${verifyURL}`;
    // await sendEmail({
    //   email: req.body.email,
    //   subject: 'Verify your account(Validity:30mins)',
    //   message,
    // });

    res.status(201).json({
      status: 'success',
      message: token,
    });
    next();
  } catch (err) {
    res.status(404).json({ status: 'failed', message: err });
  }
};
exports.authenticate = async (req, res) => {
  try {
    const token = req.params.token;
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const user = await User.findOneAndUpdate(
      { email: decoded.id },
      { $set: { Status: decoded.status } }
    );

    res.status(201).json({
      status: 'success',
      payload: {
        id: decoded.id,
        status: decoded.status,
      },
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: err });
  }
};
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError('Please Provide Email or Password', 400));
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }
  if (!user.Status) {
    return next(
      new AppError('Verify your account by url sent through mail', 401)
    );
  }
  const token = jwt.sign(
    { id: user._id, username: user.email, type: user.role },
    process.env.JWT_SECRET
  );

  const usertotoken = await User.findOneAndUpdate(
    { email: email },
    { $set: { loginToken: token } }
  );

  res.status(200).json({
    status: 'success',
    message: `Login Successfull,JWT Token Saved For Further Use For Email: ${usertotoken.email}`,
  });
};
exports.protected = async (req, res, next) => {
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
};
