import mongoose from "mongoose";

export const configDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Database connected.');
    } catch (error) {
        console.log('Database connection failed.');
        process.exit(1); 
    }
}