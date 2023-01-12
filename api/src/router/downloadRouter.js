import express, { Router } from "express";
import ytdl from "ytdl-core";
const route = express.Router();
import fs from "fs";
route.post("/", async (req, res, next) => {
  // get request by sending url for youtube video
  try {
    const r = req.body.url;

    console.log(r);
    ytdl(r, { filter: "audioonly" })
      .pipe(fs.createWriteStream("video.mp3"))
      .on("error", function (err) {
        console.log(err);
      });
    res.json({
      status: "success",
      message: "video downloaded",
    });
  } catch (error) {
    next(error);
  }
});

export default route;
