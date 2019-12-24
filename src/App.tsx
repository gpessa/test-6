import React, { useState, useEffect } from "react";
import { Building } from "./types";
import "./App.css";
import { Characteristics, Medias, Recap, Logo } from "./components";

const App: React.FC = () => {
  const [data, setData] = useState<Building>();

  useEffect(() => {
    fetch(
      "/api/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/7b79a187-2915-461f-9a2e-fa86f653381f/"
    )
      .then(function(response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      })
      .then(setData);
  }, []);

  return (
    <div className="App">
      {data && (
        <>
          <Logo />
          <Recap
            address={data.Adres}
            postcode={data.Postcode}
            city={data.Plaats}
            price={data.Prijs.Koopprijs}
          />
          
          <Medias medias={data.Media} />
          <div
            dangerouslySetInnerHTML={{
              __html: data.VolledigeOmschrijving.replace(
                /(?:\r\n|\r|\n)/g,
                "<br>"
              )
            }}
          />
          <img src={data.HoofdFoto} />
          <div>
            <div>{data.Makelaar}</div>
            <div>{data.MakelaarTelefoon}</div>
          </div>

          <div>Anno costruzione: {data.Bouwjaar}</div>

          <div>
            {data.Kenmerken?.map(item => (
              <Characteristics characteristic={item} />
            ))}
          </div>

          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    </div>
  );
};

export default App;
