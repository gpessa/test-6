import React from "react";
import { InferProps } from "prop-types";

import styles from "./styles.module.css";

const Logo: React.FC<Props> = () => <h1 className={styles.element}></h1>;

const propTypes = {};

type Props = InferProps<typeof propTypes>;

Logo.propTypes = propTypes;

export default Logo;
