import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Mongo connected to ${connection.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
