const express = require('express');
const router = express.Router();
//Router With MongoDB
const {
  GetAllappointments,
  Getappointment,
  Updateappointment,
  Deleteappointment,
} = require('./../controller/appointmentController');

router.route('/').get(GetAllappointments);
router
  .route('/:id')
  .get(Getappointment)
  .patch(Updateappointment)
  .delete(Deleteappointment);
module.exports = router;
