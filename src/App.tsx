import React from "react";
import {
  Logo,
  Recap,
  Medias,
  Map,
  Makelaar,
  Main,
  Bar,
  Kenmerken
} from "./components";

import { Building } from "./types";

import useFetch from "./hooks/useFetch";

const App: React.FC = () => {
  const { data, loading } = useFetch<Building>(
    "/api/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/7b79a187-2915-461f-9a2e-fa86f653381f/"
  );

  return !loading ? (
    <div>
      <Bar>
        <Logo />

        <Recap
          city={data.Plaats}
          address={data.Adres}
          postcode={data.Postcode}
          price={data.Prijs.Koopprijs}
        />

        <Makelaar name={data.Makelaar} phone={data.MakelaarTelefoon} />
      </Bar>

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
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default App;
