const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new payment
const createPayment = async (req, res) => {
  const { rentId, paymentDate, paymentAmount } = req.body;
  try {
    const payment = await prisma.payment.create({
      data: {
        rentId,
        paymentDate,
        paymentAmount,
      },
    });
    res.json(payment);
  } catch (error) {
    res.status(400).json({ error: 'Could not create payment' });
  }
};

// Get all payments
const getPayments = async (req, res) => {
  try {
    const payments = await prisma.payment.findMany();
    res.json(payments);
  } catch (error) {
    res.status(400).json({ error: 'Could not fetch payments' });
  }
};

// Get payment by ID
const getPaymentById = async (req, res) => {
  const { id } = req.params;
  try {
    const payment = await prisma.payment.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!payment) throw new Error('Payment not found');
    res.json(payment);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Update payment by ID
const updatePayment = async (req, res) => {
  const { id } = req.params;
  const { rentId, paymentDate, paymentAmount } = req.body;
  try {
    const updatedPayment = await prisma.payment.update({
      where: {
        id: parseInt(id),
      },
      data: {
        rentId,
        paymentDate,
        paymentAmount,
      },
    });
    res.json(updatedPayment);
  } catch (error) {
    res.status(400).json({ error: 'Could not update payment' });
  }
};

// Delete payment by ID
const deletePayment = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.payment.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json({ message: 'Payment deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Could not delete payment' });
  }
};

module.exports = {
  createPayment,
  getPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
};
