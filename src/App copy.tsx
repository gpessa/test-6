import React, { useState, useEffect } from "react";
import useHorizontal from '@oberon-amsterdam/horizontal/hook';

import { Building } from "./types";
import "./App.css";
import { Characteristics, Medias, Recap, Logo } from "./components";

const App: React.FC = () => {
  const [data, setData] = useState<Building>();

  const [container, setContainer] = useState();
  useHorizontal({ container: container });

  useEffect(() => {
    fetch(
      "/api/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/7b79a187-2915-461f-9a2e-fa86f653381f/"
    )
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <div
      className="container"
      ref={ref => setContainer(ref)}
    >
      <div className="block">Hello, scroll further</div>
      <div className="block">Why hello there</div>
      <div className="block">Why hello there</div>
    </div>
    // <div className="App">
    //   {data && (
    //     <>
    //       <Logo />
          
    //       <Recap
    //         city={data.Plaats}
    //         address={data.Adres}
    //         postcode={data.Postcode}
    //         price={data.Prijs.Koopprijs}
    //       />
          
    //       <Medias medias={data.Media} />
    //       <div
    //         dangerouslySetInnerHTML={{
    //           __html: data.VolledigeOmschrijving.replace(
    //             /(?:\r\n|\r|\n)/g,
    //             "<br>"
    //           )
    //         }}
    //       />
    //       <img src={data.HoofdFoto} />
    //       <div>
    //         <div>{data.Makelaar}</div>
    //         <div>{data.MakelaarTelefoon}</div>
    //       </div>

    //       <div>Anno costruzione: {data.Bouwjaar}</div>

    //       <div>
    //         {data.Kenmerken?.map(item => (
    //           <Characteristics characteristics={item} />
    //         ))}
    //       </div>

    //       <pre>{JSON.stringify(data, null, 2)}</pre>
    //     </>
    //   )}
    // </div>
  );
};

export default App;
