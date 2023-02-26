const express = require('express');
const { register, login, forgotPassword, getLoggedInUsers, tokenRequired } = require('../controllers/UserController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/tokenRequired', tokenRequired);
router.post('/forgot-password', forgotPassword);
router.get('/logged-in-users', getLoggedInUsers);


module.exports = router;
