import mongoose from "mongoose";


//what I will keep//
const userSchema = mongoose.Schema({
    username: {
        type : String,
        require: true,
        trim: true
    },
    email: {
        type : String,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type : String,
        require: true,
    }
})

//to interact with the database//

export default mongoose.model('User', userSchema)