import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [link, setLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLink("");
    console.log("Link submitted:", link);
    await shortenUrl();
  };

  const handleChange = (event) => {
    setLink(event.target.value);
  };

  const shortenUrl = async () => {
    try {
      const response = await axios.post("https://api-ssl.bitly.com/v4/shorten", {
        long_url: link,
      }, {
        headers: {
          Authorization: "916a5d040bfbc27f6270156abfd3dccbd44754a6",
          "Content-Type": "application/json",
        },
      });
      console.log(response.data.link);
      console.log(response.data.long_url);
      setShortenedLink(response.data.link);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Link Shortener App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={link} onChange={handleChange} required/>
        <button type="submit">Submit</button>
      </form>
      {shortenedLink && (
        <div>
          <h2>Shortened Link:</h2>
          <a href={shortenedLink} target="_blank" rel="noopener noreferrer">{shortenedLink}</a>
        </div>
      )}
    </div>
  );
}

export default App;