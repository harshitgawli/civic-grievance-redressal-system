import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));



import deptroute  from "./Routes/DepartmentRoutes.js";
app.use("/department",deptroute)

import route from "./Routes/userRoutes.js";
app.use("/user", route);

import complainRoute from "./Routes/complainRoutes.js";
app.use("/complain",complainRoute);

import refreshroute from "./Routes/refreshRoutes.js";
app.use("/refresh",refreshroute);


const PORT = process.env.PORT;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
  });
});
