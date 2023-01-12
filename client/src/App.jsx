import { useState } from "react";
import "./App.css";
import { downloadVideo } from "./helper/axioshelper";

function App() {
  const [form, setForm] = useState({});
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    const result = await downloadVideo(form);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // console.log(form);
  };
  return (
    <div className="App">
      <h1>Youtube Video to MP3 Downloader</h1>
      {/* Create a Form Input for the url of youtube*/}
      <form className="form" onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="url"
          placeholder="Enter Youtube URL"
          onChange={handleOnChange}
        />
        <button type="submit">Download</button>
      </form>
    </div>
  );
}

export default App;
