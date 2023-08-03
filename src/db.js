import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/merndb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(">>> DB connection established");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};
