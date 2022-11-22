const { Router } = require('express');
const getAllUsers = require('../controllers/getAllUsers.js');
const createUser = require('../controllers/createUser.js');

const router = Router();

router.route('/').get(getAllUsers).post(createUser);
module.exports = router;
