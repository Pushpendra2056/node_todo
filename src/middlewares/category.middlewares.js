const Category = require("../modals/category.modals")
const Todo = require("../modals/todo.modals")

const getCategoryList = async (req,res) =>{
    const data = await Category.find().populate('list')
    return res.json({
        "msg": "data",
        "data": data
    })
}

const getSingleCategoryById = async (req,res) =>{
    const data = await Category.findById({
        _id: req.params.id,
    })
    return res.json({
        "msg": "data",
        "data": data
    })
}

const deleteCategoryById = async (req,res) => {
    await Category.deleteOne({
        _id: req.params.id,
    })
    return res.json({
        "msg": "deleted"
    })
}

const createCategory = async (req,res) => {
    await Category.create({
        name: req.body.name,
        createdBy: req.body.createdBy,
    })
    return res.json({
        "msg": "created"
    })
}

module.exports = {
    getCategoryList,
    getSingleCategoryById,
    deleteCategoryById,
    createCategory
}