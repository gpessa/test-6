import React from "react";
import { InferProps } from 'prop-types';

const logo = require("../../assets/logo.png");

const Logo: React.FC<Props> = () => (
  <img src={logo}/>
);

const propTypes = {
};

type Props = InferProps<typeof propTypes>;

Logo.propTypes = propTypes;

export default Logo;
