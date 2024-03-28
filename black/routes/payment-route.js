const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/payment-controller');

// Create a new payment
router.post('/payments', PaymentController.createPayment);

// Get all payments
router.get('/payments', PaymentController.getPayments);

// Get payment by ID
router.get('/payments/:id', PaymentController.getPaymentById);

// Update payment by ID
router.put('/payments/:id', PaymentController.updatePayment);

// Delete payment by ID
router.delete('/payments/:id', PaymentController.deletePayment);

module.exports = router;
