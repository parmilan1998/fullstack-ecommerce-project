import express from 'express'
import cors from 'cors'
import connectDB from './src/config/database.js'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

const app = express()

const PORT = process.env.PORT || 9000

//TODO: middleware
app.use(bodyParser.json({ urlencoded: true }))
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.static('public/product'))

// TODO: sample api
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Ecommerce Shopping API!🚀🚀🚀' })
})

//TODO: import routes
import categoryRoute from './src/routes/category.routes.js'
import productRoute from './src/routes/product.routes.js'
// import orderRoute from "./routes/order.routes.js";
import userRoute from './src/routes/user.routes.js'
// import reviewRoute from "./routes/review.routes.js";
// import cartRoute from "./routes/cart.routes.js";
// import paymentRoute from "./routes/payment.routes.js";
import FeedbackRoute from './src/routes/feedback.routes.js'

//TODO: use routes
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/product', productRoute)
// app.use("/api/v1/order", orderRoute);
// app.use("/api/v1/payment", paymentRoute);
// app.use("/api/v1/cart", cartRoute);
app.use('/api/v1/user', userRoute)
// app.use("/api/v1/review", reviewRoute);
app.use('/api/v1/feedback', FeedbackRoute)

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`)
    })
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
