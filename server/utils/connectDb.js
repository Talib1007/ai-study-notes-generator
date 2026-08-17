import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB Connected")
    } catch (error) {
        console.log("DB Error", error.message)
        process.exit(1)   // DB fail hone pe server start hi na ho
    }
}
export default connectDb