import React from "react";
import styles from "../Error/Error.module.css";

function Error({ message }) {
  return (
    <div className={`${styles.error} alert position-absolute`}>{message}</div>
  );
}

export default Error;
