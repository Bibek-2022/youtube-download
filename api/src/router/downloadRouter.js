import express, { Router } from "express";
import ytdl from "ytdl-core";
const route = express.Router();
import os from "os";
import fs from "fs";
route.post("/", async (req, res, next) => {
  // get request by sending url for youtube video
  try {
    const r = req.body.url;
    const homeDir = os.homedir(); // See: https://www.npmjs.com/package/os
    const desktopDir = `${homeDir}/Desktop`;
    console.log(r);
    if (r == null) {
      return res.status(400).json({
        status: "error",
        message: "url is required",
      });
    }
    ytdl(r, { filter: "audioonly" })
      .pipe(fs.createWriteStream(`${desktopDir}\\video.mp3`))
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
