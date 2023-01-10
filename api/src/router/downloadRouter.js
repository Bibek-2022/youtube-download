import express, { Router } from "express";
import ytdl from "ytdl-core";
const route = express.Router();

route.post("/", async (req, res, next) => {
  // get request by sending url for youtube video
  try {
    // download video in mp3
    console.log(req.body.url);
    const url = req.body.url;
    const info = await ytdl.getInfo(url);
    const format = ytdl.chooseFormat(info.formats, { quality: "140" });
    res.header(
      "Content-Disposition",
      `attachment; filename="${info.videoDetails.title}.mp3"`
    );
    ytdl(url, { format: format }).pipe(res);
  } catch (error) {
    next(error);
  }
});

route.post("/", async (req, res, next) => {});

export default route;
