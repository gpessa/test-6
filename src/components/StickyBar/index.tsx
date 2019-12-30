import React from "react";

import styles from "./styles.module.scss";

const StickyBar: React.FC = ({ children }) => (
  <div className={styles.stickyBar}>{children}</div>
);

export default StickyBar;
