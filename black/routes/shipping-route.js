const express = require('express');
const router = express.Router();
const ShippingController = require('../controllers/shipping-controller');

// Create a new shipping
router.post('/shippings', ShippingController.createShipping);

// Get all shippings
router.get('/shippings', ShippingController.getShippings);

// Get shipping by ID
router.get('/shippings/:id', ShippingController.getShippingById);

// Update shipping by ID
router.put('/shippings/:id', ShippingController.updateShipping);

// Delete shipping by ID
router.delete('/shippings/:id', ShippingController.deleteShipping);

module.exports = router;
