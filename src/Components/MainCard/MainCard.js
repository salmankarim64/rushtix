import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

import { Button } from "@material-ui/core";
import BookNow from "../BookNow/BookNow";
import Time from "../../icons/date.svg";
import Price from "../../icons/price.svg";
import Location from "../../icons/location.svg";

const useStyles = makeStyles((theme) => ({
  card: {
    background: "#fff",

    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    boxShadow: "none",
    borderRadius: "none",

    [theme.breakpoints.up("md")]: {
      borderRadius: "20px",
      boxShadow: "0 2px 7px 1px rgb(254 77 85 / 17%)",
    },
  },
  img: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    order: "3",
    [theme.breakpoints.up("md")]: {
      order: "1",
    },
  },
  eventInfo: {
    padding: "25px 40px",
    display: "flex",
    flexDirection: "column",
    zIndex: "2",
    order: 2,
  },
  button: {
    width: "100%",
    textAlign: "center",
    padding: "23.5px 40px",
    textTransform: "uppercase",
    color: "#fff",
    borderRadius: "10px",
    fontWeight: "700px",
    boxShadow: "0px 0px 20px 3px rgb(253 198 209)",
    background:
      "linear-gradient(90deg,rgba(236,0,139,1) 0%,rgba(254,128,8,1) 50%,rgba(236,0,139,1) 100%) !important",
  },
  line: {
    padding: "25px 0",
    alignItems: "center",
    display: "flex",
  },
  show: {
    display: "block",
    textAlign: "center",
    color: "#484848",
    fontWeight: "700",
    marginBottom: "10px",
    letterSpacing: "0em",
    fontSize: "35px",
    padding: "15px 20px 0",
    order: 1,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const MainCard = ({ cardInfo, PageHeader }) => {
  const [bookingForm, OpenBookingForm] = useState(false); //user is login or not
  const { image, hashtags, date, time, location, price } = cardInfo;
  const styles = useStyles();
  return (
    <div className={styles.card}>
      <span className={styles.show}>{PageHeader}</span>
      <img className={styles.img} src={image} />
      <div className={styles.eventInfo}>
        {/* Add font by yourself*/}
        <span
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Already have an account? <span href="#">LogIn</span>
        </span>
        {!bookingForm && (
          <Button
            className={styles.button}
            onClick={() => {
              OpenBookingForm(bookingForm ? false : true);
            }}
          >
            {" "}
            Book Now
          </Button>
        )}
        {bookingForm && <BookNow />}

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.line}>
            <img src={Time} />
            <span style={{ paddingLeft: "10px" }}>
              {date} @ {time}
            </span>
          </div>
          <div className={styles.line}>
            <img src={Price} />

            <span style={{ paddingLeft: "10px" }}>{price}</span>
          </div>
          <div className={styles.line}>
            <img src={Location} />
            <span style={{ paddingLeft: "10px" }}>{location}</span>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              display: "block",
              pading: "0 10px",
              textAlign: "center",
            }}
          >
            {hashtags &&
              hashtags.map((item) => {
                return (
                  <div style={{ margin: "5px", display: "inline-block" }}>
                    {item}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
