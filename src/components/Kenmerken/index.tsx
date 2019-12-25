import React from "react";

import { KenmerkenEntity } from "../../types";
import Characteristics from "../Characteristics";

import styles from "./styles.module.css";

const Kenmerken: React.FC<Props> = ({ kenmerken }) => (
  <div className={styles.element}>
    {kenmerken.map((item, key) => (
      <Characteristics characteristics={item} key={key} />
    ))}
  </div>
);

type Props = {
  kenmerken: KenmerkenEntity[];
};

export default Kenmerken;
