import PropTypes, { InferProps } from "prop-types";
import React from "react";

import Button from "../Button";
import styles from "./styles.module.scss";

const Makelaar: React.FC<Props> = ({ name, phone }) => (
  <div className={styles.element}>
    <div className={styles.data}>
      <div className={styles.name}>{name}</div>
      <div>{phone}</div>
    </div>
    <Button variant="secondary">Contact</Button>
  </div>
);

const propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

type Props = InferProps<typeof propTypes>;

Makelaar.propTypes = propTypes;

export default Makelaar;
