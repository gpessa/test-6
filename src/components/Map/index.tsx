import React, { useEffect, useState } from "react";
import PropTypes, { InferProps } from "prop-types";

import styles from "./styles.module.scss";

const Map: React.FC<Props> = ({ address, x, y }) => {
  const MY_API = "AIzaSyCc3zoz5TZaG3w2oF7IeR-fhxNXi8uywNk";
  let _url = `https://www.google.com/maps/embed/v1/place?key=${MY_API}&q=${y},${x}`;

  return (
    <iframe
      width="100%"
      height="600"
      src={_url}
      frameBorder={0}
      scrolling="no"
      marginHeight={0}
      marginWidth={0}
      className={styles.element}
    ></iframe>
  );
};

const propTypes = {
  address: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

type Props = InferProps<typeof propTypes>;

Map.propTypes = propTypes;

export default Map;
