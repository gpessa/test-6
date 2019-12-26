import React from "react";
import PropTypes, { InferProps } from "prop-types";

import styles from "./styles.module.scss";

const Button: React.FC<Props> = ({ href, variant, children }) => {
  const isLink = !!href;
  const Tag = isLink ? "a" : "button";

  return (
    <Tag className={`${styles.element} ${styles[variant || "primary"]}`}>
      {children}
    </Tag>
  );
};

const propTypes = {
  href: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"])
};

type Props = InferProps<typeof propTypes>;

Button.propTypes = propTypes;

export default Button;
