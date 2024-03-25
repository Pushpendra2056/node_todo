const User = require("../modals/user.modals")

const getUser = async (req,res) =>{
    const users = await User.find()
    return res.json({
        "msg": "success",
        "data": users
    })
}

const getSingleUserByID = async (req,res) =>{
    const data = await User.findById({
        _id:req.params.id
    })
    return res.json({
        "msg": "success",
        "data": data
    })
}

const deleteUserByID = async (req,res) =>{
    await User.deleteOne({
        _id:req.params.id
    })
    return res.json({
        "msg": "success"
    })
}

const createUser = async (req,res) =>{
    await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    return res.json({
        "msg": "success"
    })
}

module.exports = {
    getUser,
    getSingleUserByID,
    deleteUserByID,
    createUser
}