import mongoose, { mongo } from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!); // here ! means that ts doesnt need to worry the mongo uri will definitely will be here and wont be empty string.

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB Connected");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error, please make sure database is up and running: " +
          err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong in connecting with db", error);
  }
}
