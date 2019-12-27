import React from "react";
import { KenmerkenEntity } from "../../types";
import styles from "./styles.module.scss";

const Characteristics: React.FC<Props> = ({ characteristics }) => (
  <dl className={styles.element}>
    <h4>{characteristics.Titel}</h4>
    {characteristics.Kenmerken!.map(b => (
      <div className={`${styles.group} ${b.NaamCss}`}>
        <dt className={styles.label}>{b.Naam}</dt>
        <dd
          className={styles.value}
          dangerouslySetInnerHTML={{
            __html: b.Waarde
          }}
        />
      </div>
    ))}
  </dl>
);

interface Props {
  characteristics: KenmerkenEntity;
}

export default Characteristics;
