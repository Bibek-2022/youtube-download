import axios from "axios";
const rootUrl = "http://localhost:8000/api/downloadYoutubeVideo";

const apiProcessor = async (method, url, data) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    let message = error.message;
    return {
      status: "error",
      message,
    };
  }
};

export const downloadVideo = (obj) => {
  return apiProcessor("get", rootUrl, obj);
};
