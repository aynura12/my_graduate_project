const express = require('express');
const { register, login, forgotPassword, getLoggedInAdmins, tokenRequired } = require('../controllers/AdminController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/tokenRequired', tokenRequired);
router.post('/forgot-password', forgotPassword);
router.get('/logged-in-admins', getLoggedInAdmins);


module.exports = router;
