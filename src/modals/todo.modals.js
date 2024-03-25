const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    heading:{
        type: String,
        required: true 
    },
    discription:{
        type: String,
        required: true
    }
},{timestamps: true})

const Todo = mongoose.model("Todo",todoSchema)

module.exports = Todo