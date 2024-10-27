import e from "express";

import cors  from "cors";

import cookieParser from "cookie-parser";

const app = e();

app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

app.use(e.json())
app.use(e.urlencoded({extended : true}))
app.use(e.static('public'))
app.use(cookieParser())

import router from "./routes/freelancers.routes";

app.use("/api/user",router)

export {app}