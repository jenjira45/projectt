const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new user
const createUser = async (req, res) => {
  const { username, firstname, lastname, age, phone, address, email, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        username,
        firstname,
        lastname,
        age,
        phone,
        address,
        email,
        password,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'Could not create user' });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: 'Could not fetch users' });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!user) throw new Error('User not found');
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Update user by ID
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, firstname, lastname, age, phone, address, email, password } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        username,
        firstname,
        lastname,
        age,
        phone,
        address,
        email,
        password,
      },
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: 'Could not update user' });
  }
};

// Delete user by ID
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Could not delete user' });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
