import mongoose from 'mongoose'

// User Schema with Validation
const userSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: [3, 'Name must be at least 3 characters'],
        maxlength: [50, 'Name cannot exceed 50 characters']
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,'Please enter a valid email']
        },

    age: {
        type: Number,
        min: [0, 'Age cannot be negative'],
        max: [120, 'Age cannot exceed 120']
        },

    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters']
        }
    },
    {
        timestamps: true
    }
)

// Create Model
const User = mongoose.model('User', userSchema)
export default User