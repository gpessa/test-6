import React, { useState, useEffect } from "react";
import { ScrollingContainer, Logo, Recap, Medias } from "./components";
import { Building } from "./types";

const App: React.FC = () => {
  const [data, setData] = useState<Building>();

  useEffect(() => {
    fetch(
      "/api/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/7b79a187-2915-461f-9a2e-fa86f653381f/"
    )
      .then((response) => response.json())
      .then(setData);
  }, []);

  return data ? (
    <ScrollingContainer>
      <div>
        <Logo />

        <Recap
          city={data.Plaats}
          address={data.Adres}
          postcode={data.Postcode}
          price={data.Prijs.Koopprijs}
        />
      </div>
      <div>
      </div>
      <div>
        <Medias medias={data.Media} />
      </div>
      <div>See react example</div>
    </ScrollingContainer>
  ) : null
};

export default App;
