import React from "react";

import styles from "./styles.module.scss";

const Logo: React.FC = () => (
  <a className={styles.element} href="/">
    <img
      className={styles.image}
      alt="Funda"
      src={require("../../assets/images/logo.png")}
    />
  </a>
);

export default Logo;
