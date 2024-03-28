const express = require('express');
const router = express.Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/rent-contrller');

// Create a new user
router.post('/users', createUser);

// Get all users
router.get('/users', getUsers);

// Get user by ID
router.get('/users/:id', getUserById);

// Update user by ID
router.put('/users/:id', updateUser);

// Delete user by ID
router.delete('/users/:id', deleteUser);

module.exports = router;
