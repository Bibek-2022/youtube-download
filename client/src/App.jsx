import { useState } from "react";
import "./App.css";
import { downloadVideo } from "./helper/axioshelper";
import { Button } from "@nextui-org/react";
import { Input, Grid } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
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
      {/* Wrap inside card */}
      <Card css={{ mw: "600px" }} className="App1">
        <Card.Body className="App2">
          <>
            <Text h1 size={60} weight="bold">
              Download
            </Text>
            <Text h1 size={60} weight="bold">
              Youtube Videos
            </Text>
            <Text h1 size={60} weight="bold">
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
            <Button type="submit" className="siz">
              Submit
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
