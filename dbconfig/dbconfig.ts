import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfuly");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connection error: " + err);
      process.exit();
    });
  } catch (error) {
    console.log("Error connecting to MongoDB");
    console.log(error);
  }
}
