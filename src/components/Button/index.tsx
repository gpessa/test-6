import PropTypes, { InferProps } from "prop-types";
import React from "react";

import styles from "./styles.module.scss";

const Button: React.FC<Props> = ({
  className,
  children,
  variant,
  type,
  ...props
}) => (
  <button
    type={type as React.ButtonHTMLAttributes<HTMLButtonElement>["type"]}
    className={`${styles.button} ${className} ${variant &&
      styles[`button--${variant}`]}`}
    {...props}
  >
    {children}
  </button>
);

const propTypes = {
  type: PropTypes.oneOf(["button", "reset", "submit", null]),
  variant: PropTypes.oneOf(["primary", "secondary", "link", null])
};

const defaultProps = {
  type: "button",
  variant: "primary"
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

type Props = InferProps<typeof propTypes> & React.HTMLProps<HTMLButtonElement>;

export default Button;
