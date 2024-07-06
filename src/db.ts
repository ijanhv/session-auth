import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGO_URL || 'mongodb://rootuser:rootpass@localhost:64000/';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "auth"
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
