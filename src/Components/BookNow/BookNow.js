import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  base: {},
}));

const BookNow = ({ cardInfo }) => {
  const styles = useStyles();
  return (
    <div styles={{ position: "relative", width: "100%", display: "flex" }}>
      <form>
        <div
          style={{
            height: "auto",
            overflow: "hidden",
            display: "flex",
            margin: "10px 0",
          }}
        >
          <input
            type="text"
            style={{
              flex: "1",
              float: "left",
              border: "1px solid rgba(0,0,0,.4",
              borderRadius: "3px",
              padding: "0.8125rem 0.9375rem",
            }}
            placeholder={"First"}
          />
          <input
            type="text"
            style={{
              flex: "1",
              float: "left",
              marginLeft: "2px",
              border: "1px solid rgba(0,0,0,.4",
              borderRadius: "3px",
              padding: "0.8125rem 0.9375rem",
            }}
            placeholder={"Last"}
          />
        </div>

        <input
          type="text"
          style={{
            width: "-webkit-fill-available",
            float: "left",
            border: "1px solid rgba(0,0,0,.4",
            borderRadius: "3px",
            padding: "0.8125rem 0.9375rem",
          }}
          placeholder={"Email"}
        />

        <input
          style={{
            width: "-webkit-fill-available",
            float: "left",
            border: "1px solid rgba(0,0,0,.4",
            borderRadius: "3px",
            padding: "0.8125rem 0.9375rem",
            margin: "10px 0",
          }}
          placeholder={"Mobile Number"}
        />
        <input
          type="password"
          style={{
            width: "-webkit-fill-available",
            float: "left",
            border: "1px solid rgba(0,0,0,.4",
            borderRadius: "3px",
            padding: "0.8125rem 0.9375rem",
          }}
          placeholder={"Password"}
        />

        {/*Need to complete it from here*/}
      </form>
    </div>
  );
};

export default BookNow;
