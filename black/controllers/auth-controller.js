const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const JWT_SECRET = 'qwerty';


exports.register = async (req, res, next) => {
    const {username ,firstname, lastname, age, phone, address , email, password,  confirmPassword } = req.body;
    try {
      if (!(username  && firstname && lastname && age && phone &&  address  && email && password  && confirmPassword)) {
        return next(new Error("Please fill in all fields"));
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 8);
  
      // Create user in the database
      const user = await prisma.user.create({
        data: {
            username,
          firstname,
          lastname,
          age,
          phone,
          address ,
          email ,
          password: hashedPassword,
        }
      });
  
      res.json({ msg: 'Registration successful' });
    } catch (err) {
      next(err);
    }
  };

exports.login = async(req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
      // validation
      if (!(email && password)) {
          throw new Error('Email and password must be provided');
      }
      // find user in the database
      const user = await prisma.user.findUnique({
          where: { email },
      });
      console.log('user', user);
      if (!user) {
          throw new Error('User not found');
      }
      // check password
      const pwOk = await bcrypt.compare(password, user.password);
      if (!pwOk) {
          throw new Error('Invalid login credentials');
      }

      // Assuming login is successful, generate a JWT token
      const token = jwt.sign({ userId: user.id }, 'qwerty');

      // Return the token
      res.json({ token });
  } catch (error) {
      next(error);
  }
};

exports.getme = async(req, res, next) => {
  try {
      const userId = req.user.id;
      console.log('userId22', userId);
      const user = await prisma.user.findUnique({
          where: { id: userId },
      });
      console.log('user11', user);
      delete user.password;
      console.log('user22', user);
      if (!user) {
          throw new Error('User not found');
      }
      res.json(user);
  } catch (err) {
      next(err);
  }
};

exports.adminLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // validation
    if (!(email && password)) {
      throw new Error('Email and password must be provided');
    }

    // find admin in the database by email and role
    const admin = await prisma.user.findUnique({
      where: { email, role: 'ADMIN' },
    });
    
    if (!admin) {
      throw new Error('Admin not found');
    }

    // check password
    const pwOk = await bcrypt.compare(password, admin.password);
    if (!pwOk) {
      throw new Error('Invalid login credentials');
    }

    // issue jwt token
    const payload = { id: admin.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.json({ token });
  } catch (err) {
    next(err);
  }
};