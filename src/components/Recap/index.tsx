import React from "react";
import PropTypes, { InferProps } from "prop-types";

import styles from "./styles.module.css";

const Logo: React.FC<Props> = ({
  className,
  address,
  postcode,
  city,
  price
}) => {
  const priceFormatted = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR"
  }).format(price);

  return (
    <hgroup className={className || ""}>
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
  city: PropTypes.string.isRequired,
  className: PropTypes.string
};

Logo.defaultProps = {
  className: ""
};

type Props = InferProps<typeof propTypes>;

Logo.propTypes = propTypes;

export default Logo;
