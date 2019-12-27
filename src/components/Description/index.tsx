import React from "react";

import styles from "./styles.module.scss";

const Description: React.FC<Props> = ({ description }) => (
  <div
    className={styles.element}
    dangerouslySetInnerHTML={{
      __html: description.replace(/\n/g, "<br />")
    }}
  />
);

interface Props {
  description: string;
}

export default Description;
