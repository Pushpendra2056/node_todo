const express = require("express")
const {getAllTodoList,getSingleTodoByID,deleteTodoById,createTodo } = require("../middlewares/todo.middlewares")

const router = express.Router()

router.route("/").get(getAllTodoList).post(createTodo)
router.route("/:id").get(getSingleTodoByID).delete(deleteTodoById)

module.exports = router