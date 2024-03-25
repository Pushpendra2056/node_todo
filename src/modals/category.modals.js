const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        reqiured: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    list:[
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref:"Todo"
        }
    ]
},{timestamps: true})

const Category = mongoose.model("Category",categorySchema)

module.exports = Category