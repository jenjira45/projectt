require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/error')
const authRoute = require('./routes/auth-route')
const userRoute = require('./routes/user-route'); 
const shippingRoute = require('./routes/shipping-route'); 
const paymentRoute = require('./routes/payment-route');
const reveiwsRoute = require('./routes/reveiws-route');
const rentRoute = require('./routes/rent-route')
const cameraRoute = require('./routes/camera-route')
const app = express()

app.use(cors())
app.use(express.json())

// service
app.use('/auth', authRoute)
app.use(userRoute); 
app.use(shippingRoute); 
app.use(rentRoute);
app.use(reveiwsRoute);
app.use(paymentRoute);
app.use(cameraRoute);

// notFound
app.use(notFound)

// error middleware
app.use(errorMiddleware)

let port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on Port :', port))
