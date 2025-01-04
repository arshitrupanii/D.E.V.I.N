import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true,
        trim : true,
        lowercase : true,
        minlength : [6, 'Email must be at least 6 characters long'],
    },

    password : {
        type: String,
        required: true
    }
});


userSchema.static.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

userSchema.static.hashPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}
