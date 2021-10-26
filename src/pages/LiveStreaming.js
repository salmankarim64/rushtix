import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core/Button";
import StreamingContent from "../Components/StreamingContent/StreamingContent";
import img from "../DummyFiles/Impressionable.jpg";

const useStyles = makeStyles((theme) => ({
  page: {
    height: "100%",
    background: "#f9f9f9",
  },
  banner: {
    height: 450,

    background:
      "linear-gradient(90deg,rgba(236,0,139,1) 25%,rgba(254,77,85,1) 65%,rgba(255,136,0,1) 100%) !important",
    //color: "blue",
    position: "relative",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));

const LiveStreaming = () => {
  const styles = useStyles();
  let StreamingContentData = {
    PageHeader: "Impressionable",
    cardInfo: {
      image: img,
      hashtags: [
        "#audiance-voting",
        "#comedy",
        "#game",
        "#game",
        "#audiance-voting",
      ],
      date: "12/21/12",
      time: "6pm",
      location: "London",
      price: "6",
    },
    contentDetails: {
      heading: "Test Heading",
    },
  };
  return (
    <div className={styles.page}>
      <div className={styles.banner}></div>
      <StreamingContent content={StreamingContentData} />
    </div>
  );
};

export default LiveStreaming;
