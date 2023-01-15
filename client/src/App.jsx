import { useState } from "react";
import "./App.css";
import { downloadVideo } from "./helper/axioshelper";
import { Button } from "@nextui-org/react";
import { Input, Grid } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
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
      <>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        >
          Download
        </Text>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
          }}
          weight="bold"
        >
          Youtube Videos
        </Text>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold"
        >
          in MP3
        </Text>
      </>
      {/* Create a Form Input for the url of youtube*/}
      <form className="form spc" onSubmit={handleOnSubmit}>
        {/* <input
          type="text"
          name="url"
          placeholder="Enter Youtube URL"
          onChange={handleOnChange}
        /> */}
        <Input
          bordered
          placeholder="Youtube URL"
          type="text"
          name="url"
          onChange={handleOnChange}
          className="spc1"
        />
        <Button color="success" type="submit" className="siz">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
