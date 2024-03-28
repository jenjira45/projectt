const express = require('express');
const router = express.Router();
const CameraController = require('../controllers/camera-controller');

// Create a new camera
router.post('/cameras', CameraController.createCamera);

// Get all cameras
router.get('/cameras', CameraController.getCameras);

// Get camera by ID
router.get('/cameras/:id', CameraController.getCameraById);

// Update camera by ID
router.put('/cameras/:id', CameraController.updateCamera);

// Delete camera by ID
router.delete('/cameras/:id', CameraController.deleteCamera);

module.exports = router;
