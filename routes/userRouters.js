const express = require('express');
const router = express.Router();
const {
  GetAllUsers,
  GetUser,
  UpdateUser,
  DeleteUser,
} = require('./../controller/userController');
const {
  signup,
  authenticate,
  login,
  protect,
} = require('./../controller/authController');
router.route('/signup').post(signup);
router.route('/login').patch(login);
router.route('/authenticate/:token').patch(authenticate);
router.route('/').get(protect, GetAllUsers);
router.route('/:id').get(GetUser).patch(UpdateUser).delete(DeleteUser);
module.exports = router;
