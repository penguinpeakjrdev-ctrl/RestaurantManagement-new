import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("❌ MONGO_URL is not defined in .env file");
    }

    console.log("🔄 Connecting to MongoDB...");
    
    await mongoose.connect(process.env.MONGO_URL, {
      retryWrites: true,
      w: "majority",
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`✅ MongoDB Connected Successfully`);
    console.log(`📍 Database: ${mongoose.connection.name}`);
    return true;
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    
    // Provide specific error messages
    if (error.message.includes("MONGO_URL")) {
      console.error("💡 Solution: Add MONGO_URL to your .env file");
    } else if (error.message.includes("connect")) {
      console.error("💡 Solution: Check your MongoDB connection string or internet");
    }
    
    throw error;
  }
};

export default connectDB;
