import React from "react";
import Loader from "react-loader-spinner";
import styles from "./loader.module.css";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Load = () => (
  <div className={styles.loader}>
    <Loader type="Rings" color="#713EE5" height={200} width={200} />
  </div>
);

export default Load;
