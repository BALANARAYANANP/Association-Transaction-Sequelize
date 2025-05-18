const express = require('express');
const { createParentAndChild } = require('../Controllers/userControllers');

const router = express.Router();

router.post('/new', createParentAndChild);

module.exports = router;
