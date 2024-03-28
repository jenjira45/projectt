const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new camera
const createCamera = async (req, res) => {
  const { cameraName, cameraType, price } = req.body;
  try {
    const camera = await prisma.camera.create({
      data: {
        cameraName,
        cameraType,
        price,
      },
    });
    res.json(camera);
  } catch (error) {
    res.status(400).json({ error: 'Could not create camera' });
  }
};

// Get all cameras
const getCameras = async (req, res) => {
  try {
    const cameras = await prisma.camera.findMany();
    res.json(cameras);
  } catch (error) {
    res.status(400).json({ error: 'Could not fetch cameras' });
  }
};

// Get camera by ID
const getCameraById = async (req, res) => {
  const { id } = req.params;
  try {
    const camera = await prisma.camera.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!camera) throw new Error('Camera not found');
    res.json(camera);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Update camera by ID
const updateCamera = async (req, res) => {
  const { id } = req.params;
  const { cameraName, cameraType, price } = req.body;
  try {
    const updatedCamera = await prisma.camera.update({
      where: {
        id: parseInt(id),
      },
      data: {
        cameraName,
        cameraType,
        price,
      },
    });
    res.json(updatedCamera);
  } catch (error) {
    res.status(400).json({ error: 'Could not update camera' });
  }
};

// Delete camera by ID
const deleteCamera = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.camera.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json({ message: 'Camera deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Could not delete camera' });
  }
};

module.exports = {
  createCamera,
  getCameras,
  getCameraById,
  updateCamera,
  deleteCamera,
};
