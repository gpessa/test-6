import React from "react";

import {
  faAlignJustify,
  faHome,
  faImages,
  faList,
  faMapMarked
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Bar,
  Description,
  Kenmerken,
  Logo,
  Main,
  Makelaar,
  Map,
  Medias,
  Navigation,
  Recap
} from "./components";
import useFetch from "./hooks/useFetch";
import { Building } from "./types";

const App: React.FC = () => {
  const { data, loading } = useFetch<Building>(
    "/api/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/7b79a187-2915-461f-9a2e-fa86f653381f/"
  );

  return !loading ? (
    <>
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

      <Navigation
        sections={[
          {
            icon: <FontAwesomeIcon icon={faHome} />,
            element: (
              <Main
                photo={data.HoofdFoto}
                year={data.Bouwjaar}
                rooms={data.AantalKamers}
                living={data.WoonOppervlakte}
                plot={data.PerceelOppervlakte}
              />
            )
          },
          {
            label: "Description",
            icon: <FontAwesomeIcon icon={faAlignJustify} />,
            element: <Description description={data.VolledigeOmschrijving} />
          },
          {
            label: "Characteristics",
            icon: <FontAwesomeIcon icon={faList} />,
            element: <Kenmerken kenmerken={data.Kenmerken} />
          },
          {
            label: "Photos",
            icon: <FontAwesomeIcon icon={faImages} />,
            element: <Medias medias={data.Media} />
          },
          {
            label: "Map",
            icon: <FontAwesomeIcon icon={faMapMarked} />,
            element: <Map x={data.WGS84_X} y={data.WGS84_Y} />
          }
        ]}
      />
    </>
  ) : (
    <div>Loading</div>
  );
};

export default App;
