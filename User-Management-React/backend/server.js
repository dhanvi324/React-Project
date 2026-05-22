import exp from 'express'
import { connect } from 'mongoose'
import dotenv from 'dotenv'
import UserApp from './APIs/UserAPI.js'
import cors from 'cors'
dotenv.config()

const app = exp()
app.use(
    cors({
      origin: ["http://localhost:5173", "http://localhost:5175", "https://user-management-nu-smoky.vercel.app", "http://localhost:5174"],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      credentials: true,
    })
  )
app.use(exp.json())

// Mount User API
app.use('/user-api', UserApp)

// DB Connection
async function connectDB() {
    try {
    await connect(process.env.DB_URL)
    console.log('Database connected successfully')
    } catch (err) {
    console.log('DB connection error:', err.message)
    process.exit(1)
    }
}
connectDB()

// Error Middleware
app.use((err, req, res, next) => {
    // Mongoose validation error
    if (err.name === "ValidationError") {
    return res.status(400).json({
        message: "Validation failed",
        errors: err.errors,
    });
    }
  // Invalid ObjectId
    if (err.name === "CastError") {
    return res.status(400).json({
        message: "Invalid ID format",
    });
    }
  // Duplicate key
    if (err.code === 11000) {
    return res.status(409).json({
        message: "Duplicate field value",
    });
    }
    res.status(500).json({
    message: "Internal Server Error",
    });
});

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server running on ${PORT}`))
