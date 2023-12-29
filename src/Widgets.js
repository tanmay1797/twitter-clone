import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@mui/icons-material";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetsContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTweetEmbed tweetId={"1267074563973791744"} />
        <TwitterTweetEmbed tweetId={"1589582799191035904"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="memechat_app"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.instagram.com/tanmayxg/"}
          options={{ text: "I am Awesome", via: "xoxo" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
