const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new review
const createReview = async (req, res) => {
  const { userId, rentId, comment } = req.body;
  try {
    const review = await prisma.review.create({
      data: {
        userId,
        rentId,
        comment,
      },
    });
    res.json(review);
  } catch (error) {
    res.status(400).json({ error: 'Could not create review' });
  }
};

// Get all reviews
const getReviews = async (req, res) => {
  try {
    const reviews = await prisma.review.findMany();
    res.json(reviews);
  } catch (error) {
    res.status(400).json({ error: 'Could not fetch reviews from the database. Please check your database connection and try again.' });
  }
};


// Get review by ID
const getReviewById = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await prisma.review.findUnique({
      where: {
        id: parseInt(id),
      }
    });
    if (!review) throw new Error('Review not found');
    res.json(review);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Update review by ID
const updateReview = async (req, res) => {
  const { id } = req.params;
  const { userId, rentId, comment } = req.body;
  try {
    const updatedReview = await prisma.review.update({
      where: {
        id: parseInt(id),
      },
      data: {
        userId,
        rentId,
        comment,
      },
    });
    res.json(updatedReview);
  } catch (error) {
    res.status(400).json({ error: 'Could not update review' });
  }
};

// Delete review by ID
const deleteReview = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.review.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Could not delete review' });
  }
};

module.exports = {
  createReview,
  getReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
