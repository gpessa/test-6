import React from "react";
import PropTypes, { InferProps } from "prop-types";

import styles from "./styles.module.scss";

const Button: React.FC<Props> = ({
  variant,
  type,
  children,
  className,
  ...props
}) => {
  return (
    <button
      type={"button"}
      className={`${styles.element} ${className} ${
        styles[variant || "primary"]
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

const propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "link"])
};

type Props = InferProps<typeof propTypes> & React.HTMLProps<HTMLButtonElement>;

Button.propTypes = propTypes;

export default Button;
