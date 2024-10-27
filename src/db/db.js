import mongoose from "mongoose";

import { DB_NAME } from "../constant";

const connectToDb = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(`\n MONGODB CONNECTED : ${connectInstance.connection.host} `);
  } catch (error) {
    console.log(`ERROR in connection to database : ${error}`);
    process.exit(1);
  }
};

export default connectToDb;
