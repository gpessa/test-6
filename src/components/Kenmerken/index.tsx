import React from "react";

import { KenmerkenEntity } from "../../types";
import Characteristics from "../Characteristics";

import styles from "./styles.module.scss";

const Kenmerken: React.FC<Props> = ({ kenmerken }) => (
  <div className={styles.element}>
    <h2>Characteristics</h2>
    <div className={styles.list}>
      {kenmerken.map((item, key) => (
        <Characteristics characteristics={item} key={key} />
      ))}
    </div>
  </div>
);

type Props = {
  kenmerken: KenmerkenEntity[];
};

export default Kenmerken;
