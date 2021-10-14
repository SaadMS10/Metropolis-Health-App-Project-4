const express = require('express');
const userRouter = require('./routes/userRouters');
const appointmentRouter = require('./routes/appointmentRouters');
const bookingRouter = require('./routes/bookingRouters');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
//3rdParty MIDDLEWARE

//OWN MIDDLEWARE
app.use(express.json());
app.use('/healthclinicapi/v1/users', userRouter);
app.use('/healthclinicapi/v1/appointments', appointmentRouter);
app.use('/healthclinicapi/v1/bookings', bookingRouter);

module.exports = app;
