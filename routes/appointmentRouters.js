const express = require('express');
const router = express.Router();
const {
  GetAllappointments,
  Getappointment,
  Postappointment,
  Updateappointment,
  Deleteappointment,
} = require('./../controller/appointmentController');
const {
  protect,
  protectappointments,
} = require('./../controller/authController');
router
  .route('/')
  .get(protect, protectappointments, GetAllappointments)
  .post(protect, protectappointments, Postappointment);
router
  .route('/:id')
  .get(protect, protectappointments, Getappointment)
  .patch(protect, protectappointments, Updateappointment)
  .delete(protect, protectappointments, Deleteappointment);
module.exports = router;
