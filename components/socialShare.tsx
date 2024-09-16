"use client";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

export default function Social() {
  return (
    <div className="App">
      {/* <Share /> */}
      {/* <Popper className={classes.socialMediaPopper} open={true} transition> */}
      <FacebookShareButton
        url={"http://www.camperstribe.com"}
        hashtag="#camperstribe"
        style={{
          height: "50px !important",
          width: "50px !important",
        }}
      >
        <FacebookIcon size={36} />
      </FacebookShareButton>
      <TwitterShareButton
        url={"http://www.camperstribe.com"}
        title={"CampersTribe - World is yours to explore"}
        hashtags={["#camperstribe"]}
        style={{
          height: "50px !important",
          width: "50px !important",
        }}
      >
        <TwitterIcon size={36} />
      </TwitterShareButton>
      <WhatsappShareButton
        url={"http://www.camperstribe.com"}
        title={"CampersTribe - World is yours to explore"}
        separator=":: "
        style={{
          height: "50px !important",
          width: "50px !important",
        }}
      >
        <WhatsappIcon size={36} />
      </WhatsappShareButton>
      {/* </Popper> */}
    </div>
  );
}
