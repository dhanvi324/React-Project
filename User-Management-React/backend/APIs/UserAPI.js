import exp from 'express'
import mongoose from 'mongoose'

const userApp = exp.Router()

// User Schema

const userSchema = new mongoose.Schema(
    {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: Number,

    // Soft delete flag
    isDeleted: {
        type: Boolean,
        default: false
    }
    },
    { timestamps: true }
)

const User = mongoose.model('User', userSchema)

// CREATE USER
userApp.post('/user', async (req, res, next) => {
    try {
        const newUser = await User.create(req.body)
        res.status(201).send({ message: 'User created', payload: newUser })
    } catch (err) {
        next(err)
    }
})

// READ ALL ACTIVE USERS
userApp.get('/users', async (req, res, next) => {
    try {
        const users = await User.find({ isDeleted: false })
        res.send({ message: 'All active users', payload: users })
    } catch (err) {
        next(err)
    }
})

// READ USER BY ID (Only if not deleted)
userApp.get('/user/:id', async (req, res, next) => {
    try {
        const user = await User.findOne({_id: req.params.id,isDeleted: false
        })

        if (!user)return res.status(404).send({ message: 'User not found' })
            res.send({ message: 'User found', payload: user })
    } catch (err) {
        next(err)
    }
})

// UPDATE USER
userApp.put('/user/:id', async (req, res, next) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ _id: req.params.id, isDeleted: false },req.body,{ new: true })
    if (!updatedUser)return res.status(404).send({ message: 'User not found' })
        res.send({ message: 'User updated', payload: updatedUser })
    } catch (err) {
        next(err)
    }
})


// SOFT DELETE USER
userApp.delete('/user/:id', async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndUpdate(req.params.id,{ isDeleted: true },{ new: true })

    if (!deletedUser)return res.status(404).send({ message: 'User not found' })

    res.send({ message: 'User soft deleted', payload: deletedUser })
    } catch (err) {
    next(err)
    }
})

//activate user(change status to true)
//userApp.patch("/users/:id", async(req,res)=>{})
//put(complete change in the resource) and patch(partial changes)

export default userApp