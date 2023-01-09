import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Youtube Video to MP3 Downloader</h1>
      {/* Create a Form Input for the url of youtube*/}
      <form className="form">
        <input type="text" placeholder="Enter Youtube URL" />
        <button type="submit">Download</button>
      </form>
    </div>
  );
}

export default App;
