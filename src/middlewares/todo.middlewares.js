const Todo = require("../modals/todo.modals")
const categoryModal = require("../modals/category.modals")

const getAllTodoList = async (req,res) =>{
    const data = await Todo.find()
    return res.json({
        "msg": "all date getting !!",
        "data": data
    })
}

const getSingleTodoByID = async (req,res) =>{
    const data = await Todo.findById({
        _id: req.params.id
    })
    return res.json({
        "msg": "all date getting !!",
        "data": data
    })
}

const deleteTodoById = async (req,res) => {
    await Todo.deleteOne({
        _id: id.params.id
    })
    return res.json({
        "msg": "deleted",
    })
}

const createTodo = async (req,res) => {
    const data = await Todo.create({
        heading: req.body.heading,
        discription: req.body.discription
    })
    const category = await categoryModal.findById(req.body.category)
    category.list.push(data._id);
    await category.save();
    return res.json({
        "msg": "success",
    })
}

module.exports = {
    getAllTodoList,
    getSingleTodoByID,
    deleteTodoById,
    createTodo
}