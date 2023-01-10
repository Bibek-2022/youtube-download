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

// app.use((error, req, res) => {
//   console.log(error.message);
//   res.status = error.status || 404;
//   res.json({
//     status: "error",
//     status: "error server",
//     message: error.message,
//   });
// });

// import downloadRouter from "./src/router/downloadRouter.js";
// app.use("/api/v1/downloadRouter", downloadRouter);
// app.get("/api/downloadYoutubeVideo", function (req, res) {
//   var videoUrl = "https://www.youtube.com/watch?v=41ocqQXRRLI";
//   var destDir = "C:\\Users\\user\\Desktop\\youtube";

//   var videoReadableStream = ytdl(videoUrl, { filter: "audioonly" });

//   ytdl.getInfo(videoUrl, function (err, info) {
//     var videoName = info.title.replace("|", "").toString("ascii");

//     var videoWritableStream = fs.createWriteStream(
//       destDir + "\\" + videoName + ".mp3"
//     );

//     var stream = videoReadableStream.pipe(videoWritableStream);

//     stream.on("finish", function () {
//       res.writeHead(204);
//       res.end();
//     });
//   });
// });

app.get("/api/downloadYoutubeVideo", function (req, res) {
  ytdl("https://www.youtube.com/watch?v=41ocqQXRRLI").pipe(
    fs.createWriteStream("video.mp4")
  );
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server is running on port ${PORT}`);
});
