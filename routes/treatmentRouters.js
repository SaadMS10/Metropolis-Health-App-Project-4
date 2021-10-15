const express = require('express');
const router = express.Router();
const {
  GetAlltreatments,
  Gettreatment,
  Posttreatment,
  Updatetreatment,
  Deletetreatment,
} = require('./../controller/treatmentController');
const {
  protect,
  protecttreatments,
} = require('./../controller/authController');

router.route('/').get(protect, protecttreatments, GetAlltreatments);

router
  .route('/:id')
  .get(protect, protecttreatments, Gettreatment)
  .post(protect, protecttreatments, Posttreatment)
  .patch(protect, protecttreatments, Updatetreatment)
  .delete(protect, protecttreatments, Deletetreatment);
module.exports = router;
