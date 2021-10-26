import React from "react";
import { makeStyles } from "@material-ui/core";
import MainCard from "../MainCard/MainCard";
import { Block, NoEncryption } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  body: {
    boxSizing: "border-box",
    display: "flex",

    marginTop: "0px",
    [theme.breakpoints.up("md")]: {
      marginTop: "-380px",
    },
  },
  mainContent: {
    maxWidth: "1045px",
    width: "100%",
    paddingLeft: "15px",
    paddingRight: "15px",
    margin: "auto",
    //background: "blue",
  },
  layoutWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  contentSection: {
    marginTop: "10px",
    width: "100%",

    zIndex: 2,
    order: 2,
    [theme.breakpoints.up("md")]: {
      order: 1,
      marginTop: "208px",
      width: "60%",
    },
    //background: "red",
  },
  cardSection: {
    width: "100%",
    zIndex: 2,
    order: 1,
    [theme.breakpoints.up("md")]: {
      order: 2,
      width: "40%",
    },
  },
  mainContentArea: {
    marginRight: "0px",
    padding: "35px 25px",
    border: "1px solid rgb(0,0,0,0.075)",
    backgroundColor: "white",
    [theme.breakpoints.up("md")]: {
      marginRight: "35px",
    },
  },

  pageHeading: {
    minHeight: "200px",
    marginBottom: "0px",
    marginRight: "35px",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));

const StreamingContent = ({ content }) => {
  const { PageHeader, cardInfo, contentDetails } = content;
  const styles = useStyles();
  return (
    <div className={styles.body}>
      <div className={styles.mainContent}>
        <div className={styles.layoutWrapper}>
          <div className={styles.contentSection}>
            <div className={styles.pageHeading}>
              <h1> {PageHeader}</h1>
            </div>
            <div className={styles.mainContentArea}>sdfa</div>
          </div>
          <div className={styles.cardSection}>
            <MainCard cardInfo={cardInfo} PageHeader={PageHeader} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default StreamingContent;
