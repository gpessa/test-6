import React from "react";
import { KenmerkenEntity } from "../../types";

const Characteristics: React.FC<Props> = ({ characteristics }) => (
  <section style={{ marginBottom: 70 }}>
      <h3>{characteristics.Titel}</h3>
      {characteristics.Kenmerken!.map(b => (
      <div className={`${b.NaamCss}`}>
        <div>{b.Naam}</div>
        <span
          dangerouslySetInnerHTML={{
            __html: b.Waarde
          }}
        />
      </div>
    ))}
  </section>
  );

interface Props {
  characteristics: KenmerkenEntity;
}


export default Characteristics;
