import React from "react";

import styles from "./styles.module.scss";

const Bar: React.FC = ({ children }) => (
  <div className={styles.element}>{children}</div>
);

export default Bar;
