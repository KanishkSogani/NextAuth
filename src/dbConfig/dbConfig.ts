import mongoose from "mongoose";

export async function Connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const Connection = mongoose.connection;

    Connection.on("Connected", () => {
      console.log("Connected to the database");
    });

    Connection.on("error", (err) => {
      console.log(
        "MongoDB connection error please check if mongo is running : " + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Error connecting to the database");
    console.log(error);
  }
}
