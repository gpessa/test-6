import React from "react";
import { KenmerkenEntity } from "../../types";

const Characteristics = ({
  characteristic
}: {
  characteristic: KenmerkenEntity;
}) => (
  <div style={{ marginBottom: 70 }}>
    <h3>{characteristic.Titel}</h3>
    {characteristic.Kenmerken!.map(b => (
      <div style={{ marginBottom: 20 }} className={`${b.NaamCss}`}>
        <strong style={{ marginRight: 20 }}>{b.Naam}</strong>
        <span
          dangerouslySetInnerHTML={{
            __html: b.Waarde
          }}
        />
      </div>
    ))}
  </div>
);

export default Characteristics;
