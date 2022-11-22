// Import Router function from express
const { Router } = require('express');

// Import controllers
const getUsers = require('../controllers/getUsers.js');
const createUser = require('../controllers/createUser.js');
const getUser = require('../controllers/getUser.js');
const updateUser = require('../controllers/updateUser.js');
const deleteUser = require('../controllers/deleteUser.js');

// Instiate a Router
const router = Router();

// Methods for "/" Route
router.route('/').get(getUsers).post(createUser);

// Methods for "/:id" Route
router
  .route('/:id')

  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

// Export router
module.exports = router;
