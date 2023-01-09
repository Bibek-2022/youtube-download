import mongoose from "mongoose";

const FormSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("videoDownloader", FormSchema);
