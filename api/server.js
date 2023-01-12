import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import ytdl from "ytdl-core";
// fs import
import fs from "fs";
// const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 8000;
import "dotenv/config";
// user middleware
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

app.use(express.json());

//connect to db
import { mongoConnect } from "./src/config/dbConfig.js";
mongoConnect();

import downloadRouter from "./src/router/downloadRouter.js";
app.use("/api/downloadYoutubeVideo", downloadRouter);

// error handling middleware
app.use((error, req, res) => {
  console.log(error.message);
  res.status = error.status || 404;
  res.json({
    status: "error",
    status: "error server",
    message: error.message,
  });
});
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server is running on port ${PORT}`);
});
