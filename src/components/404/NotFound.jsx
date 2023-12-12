import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h3 className={styles.title}>We are sorry but...</h3>
        <p className={styles.text}>
          Can't find this page, you can go to <Link className={styles.link} to="/">Home</Link> <br />
          Or follow us on{" "}
          <a className={styles.link} target="_blank" href="https://www.linkedin.com/in/fedecarusso/">
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
