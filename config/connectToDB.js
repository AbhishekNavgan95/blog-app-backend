const mongoose = require("mongoose")

require("dotenv").config();

const connectToDB = () => {
    mongoose
    .connect(process.env.DATABASE_URL, {})
    .then(() => {
        console.log("connection successfull")
    })
    .catch((e) => {
        console.log("something went wrong!!!")
        console.log(e.message);
        process.exit(1);
    })
}

module.exports = connectToDB;