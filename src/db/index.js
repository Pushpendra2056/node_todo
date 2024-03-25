const mongoose = require("mongoose")
const {DB_NAME} = require("../constants")

const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(" \n connected instance: ${connectionInstance}" ,connectionInstance.connection.port);
    } catch (error) {
        console.log(`mongo DB connection error: ${error}`)
        process.exit(1)
    }
}

module.exports = connectDB