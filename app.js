const express = require('express');
const userRouter = require('./routes/userRouters');
const appointmentRouter = require('./routes/appointmentRouters');
const treatmentRouter = require('./routes/treatmentRouters');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use('/healthclinicapi/v1/users', userRouter);
app.use('/healthclinicapi/v1/appointments', appointmentRouter);
app.use('/healthclinicapi/v1/treatments', treatmentRouter);

module.exports = app;
