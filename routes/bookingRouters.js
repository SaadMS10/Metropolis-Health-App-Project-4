const express = require('express');
const router = express.Router();
//Router With MongoDB
const {
  GetAllbookings,
  Getbooking,
  Updatebooking,
  Deletebooking,
} = require('./../controller/bookingController');

router.route('/').get(GetAllbookings);
router.route('/:id').get(Getbooking).patch(Updatebooking).delete(Deletebooking);
module.exports = router;
