import connectToDb from "./db/db.js";

import { app } from "./app.js";

import { config } from "dotenv";

import "dotenv/config";

config({ path: "./env" });

app.on("error", (error) => {
  console.log(`ERRR: ${error}`);
  throw error;
});

connectToDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Error appeared in hosting the server : ${err}`);
  });
