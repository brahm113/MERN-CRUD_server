const express = require('express');

const router = express.Router();

//Import Controllers

const { login } = require('../controllers/auth');

//route
router.post('/login', login);


module.exports= router;