const express = require("express")
const router = express.Router()
const { getGoals, setGoals, putGoal, deleteGoal } = require("../controllers/goalController")

router.route("/").get(getGoals).post(setGoals)

router.route("/:id").put(putGoal).delete(deleteGoal)

// router.put("/:id", (req, res) => {
//     res.status(200).json({
//         message: `Update goal ${req.params.id}`
//     })
// })

// router.delete("/:id", (req, res) => {
//     res.status(200).json({
//         message: `Delete goal ${req.params.id}`
//     })
// })

module.exports = router