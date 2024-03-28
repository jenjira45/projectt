const express = require('express');
const router = express.Router();
const ReviewsController = require('../controllers/reveiws-controller');

// Create a new review
router.post('/reviews', ReviewsController.createReview);

// Get all reviews
router.get('/reviews', ReviewsController.getReviews);

// Get review by ID
router.get('/reviews/:id', ReviewsController.getReviewById);

// Update review by ID
router.put('/reviews/:id', ReviewsController.updateReview);

// Delete review by ID
router.delete('/reviews/:id', ReviewsController.deleteReview);

module.exports = router;
