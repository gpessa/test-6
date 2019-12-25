import React, { useState, useEffect } from "react";
import {
  ScrollingContainer,
  Logo,
  Recap,
  Medias,
  Map,
  Makelaar,
  Main
} from "./components";

import { Building } from "./types";

import styles from "./styles.module.css";
import Kenmerken from "./components/Kenmerken";

const App: React.FC = () => {
  const [data, setData] = useState<Building>();

  useEffect(() => {
    fetch(
      "/api/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/7b79a187-2915-461f-9a2e-fa86f653381f/"
    )
      .then(response => response.json())
      .then(setData);
  }, []);

  return data ? (
    <div>
      <div className={styles.bar}>
        <Logo />

        <Recap
          className={styles.recap}
          city={data.Plaats}
          address={data.Adres}
          postcode={data.Postcode}
          price={data.Prijs.Koopprijs}
        />

        <Makelaar name={data.Makelaar} phone={data.MakelaarTelefoon} />
      </div>

      <ScrollingContainer>
        <Main
          photo={data.HoofdFoto}
          year={data.Bouwjaar}
          rooms={data.AantalKamers}
          living={data.WoonOppervlakte}
          plot={data.PerceelOppervlakte}
        />

        <Kenmerken kenmerken={data.Kenmerken} />

        <Medias medias={data.Media} />

        <Map address={data.Adres} x={data.WGS84_X} y={data.WGS84_Y} />
      </ScrollingContainer>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default App;
