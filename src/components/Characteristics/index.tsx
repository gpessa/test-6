import React from "react";
import { KenmerkenEntity } from "../../types";
import styles from "./styles.module.css";

const Characteristics: React.FC<Props> = ({ characteristics }) => (
  <section>
    <h3>{characteristics.Titel}</h3>
    <dl>
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
  </section>
);

interface Props {
  characteristics: KenmerkenEntity;
}

export default Characteristics;
