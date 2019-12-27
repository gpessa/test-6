import PropTypes, { InferProps } from "prop-types";
import React from "react";

import styles from "./styles.module.scss";

const Button: React.FC<Props> = ({
  className,
  children,
  variant,
  type,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`${styles.element} ${className} ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

const propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "link"]).isRequired
};

Button.propTypes = propTypes;

type Props = InferProps<typeof propTypes> & React.HTMLProps<HTMLButtonElement>;

export default Button;
