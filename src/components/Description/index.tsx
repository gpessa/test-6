import React from "react";
import PropTypes, { InferProps } from "prop-types";

import styles from "./styles.module.scss";

const Description: React.FC<Props> = ({ description }) => (
  <div
    className={styles.element}
    dangerouslySetInnerHTML={{
      __html: description.replace(/\n/g, "<br />")
    }}
  />
);

const propTypes = {
  description: PropTypes.string.isRequired
};

Description.propTypes = propTypes;

type Props = InferProps<typeof propTypes>;

export default Description;
