const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const getGoals =  asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json({
        goals
    })
})

const setGoals =  asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add text")
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json({
       goal
    })
})

const putGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Update goal ${req.params.id}`
    })
})

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Delete goal ${req.params.id}`
    })
})

module.exports = {
    getGoals,
    setGoals,
    putGoal,
    deleteGoal,
}