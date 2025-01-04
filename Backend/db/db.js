import mongoose from "mongoose";
import 'dotenv/config'


function connectdb() {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error.message);
        });
}

export default connectdb;
