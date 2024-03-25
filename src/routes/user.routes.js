const express = require("express")

const {createUser,getUser,getSingleUserByID,deleteUserByID} = require("../middlewares/user.middlewares")
const router = express.Router()

router.route("/").get(getUser).post(createUser)
router.route("/:id").get(getSingleUserByID).delete(deleteUserByID)

module.exports = router