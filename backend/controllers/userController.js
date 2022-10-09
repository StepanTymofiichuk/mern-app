const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHsndler = require('express-async-handler')
const User = require('../models//userModel')
const registerUser = asyncHsndler(async (req, res) => {
    const { name, password } = req.body
    if(!name || !password) {
        res.status(400)
        throw new Error("Please add all fields")
    }
    const userExists = await User.findOne({name})
    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword =  await bcrypt.hash(password, salt)
    const user = User.create({
        name,
        password: hashedPassword
    })
    if(user) {
        res.status(201).json({
            _id: (await user).id,
            name: (await user).name,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid data')
    }
})
const loginUser = asyncHsndler(async (req, res) => {
    const {name, password} = req.body
    const user = await User.findOne({name})
    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({
            _id: (await user).id,
            name: (await user).name,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})
const getMe = asyncHsndler(async (req, res) => {
    const { _id, name } = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        name
    })
})
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}
module.exports = {
    registerUser,
    loginUser,
    getMe
}