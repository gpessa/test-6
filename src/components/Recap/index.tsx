import PropTypes, { InferProps } from "prop-types";
import React from "react";

import styles from "./styles.module.scss";

const Logo: React.FC<Props> = ({ address, postcode, city, price }) => {
  const priceFormatted = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR"
  }).format(price);

  return (
    <hgroup className={styles.element}>
      <h1 className={styles.address}>{address}</h1>
      <h2 className={styles.city}>
        {postcode} {city}
      </h2>
      <h2 className={styles.price}>{priceFormatted}</h2>
    </hgroup>
  );
};

const propTypes = {
  postcode: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired
};

type Props = InferProps<typeof propTypes>;

Logo.propTypes = propTypes;

export default Logo;
