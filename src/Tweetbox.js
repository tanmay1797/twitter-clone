import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Tanmay",
      username: "tanmayhem",
      verified: false,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://s3images.zee5.com/wp-content/uploads/2021/09/fastest-cars-world-2021-luxe-digital@2x.jpeg",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form action="submit">
        <div className="tweetBox__input">
          <Avatar src="https://s3images.zee5.com/wp-content/uploads/2021/09/fastest-cars-world-2021-luxe-digital@2x.jpeg" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="Whats's Happening"
            type="text"
          ></input>
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        ></input>
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
