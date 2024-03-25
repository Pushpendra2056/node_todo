const express = require('express')
require('dotenv').config()

const connectDB  = require('./db')
connectDB()

const app = express();

const expressUncode = require("./middlewares/common.middlewares")
expressUncode(app,express)

const userRouter = require("./routes/user.routes")
const categoryRouter = require("./routes/category.route")
const todoRouter = require("./routes/todo.routes")

app.use("/api/v1/user",userRouter)
app.use("/api/v1/category",categoryRouter)
app.use("/api/v1/todo",todoRouter)

app.listen(process.env.PORT,()=>{ console.log(`server listening on Port: ${process.env.PORT}`) })