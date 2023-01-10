import { useState } from "react";
import "./App.css";
import { downloadVideo } from "./helper/axioshelper";
const [form, setForm] = useState({});

function App() {
  const [count, setCount] = useState(0);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    downloadVideo(form);
    // console.log(form);
  };
  return (
    <div className="App">
      <h1>Youtube Video to MP3 Downloader</h1>
      {/* Create a Form Input for the url of youtube*/}
      <form className="form" onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Enter Youtube URL"
          onChange={handleOnChange}
        />
        <button type="submit">Download</button>
      </form>
    </div>
  );
}

export default App;
