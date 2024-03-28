const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new shipping
const createShipping = async (req, res) => {
  const { userId, rentId, phone, address } = req.body;
  try {
    const shipping = await prisma.shipping.create({
      data: {
        userId,
        rentId,
        phone,
        address,
      },
    });
    res.json(shipping);
  } catch (error) {
    res.status(400).json({ error: 'Could not create shipping' });
  }
};

// Get all shippings
const getShippings = async (req, res) => {
  try {
    const shippings = await prisma.shipping.findMany();
    res.json(shippings);
  } catch (error) {
    res.status(400).json({ error: 'Could not fetch shippings' });
  }
};

// Get shipping by ID
const getShippingById = async (req, res) => {
  const { id } = req.params;
  try {
    const shipping = await prisma.shipping.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!shipping) throw new Error('Shipping not found');
    res.json(shipping);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Update shipping by ID
const updateShipping = async (req, res) => {
  const { id } = req.params;
  const { userId, rentId, phone, address } = req.body;
  try {
    const updatedShipping = await prisma.shipping.update({
      where: {
        id: parseInt(id),
      },
      data: {
        userId,
        rentId,
        phone,
        address,
      },
    });
    res.json(updatedShipping);
  } catch (error) {
    res.status(400).json({ error: 'Could not update shipping' });
  }
};

// Delete shipping by ID
const deleteShipping = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.shipping.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json({ message: 'Shipping deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Could not delete shipping' });
  }
};

module.exports = {
  createShipping,
  getShippings,
  getShippingById,
  updateShipping,
  deleteShipping,
};
