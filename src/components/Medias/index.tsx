import React, { useState } from "react";

import { MediaEntity } from "../../types";
import Media from "../Media";
import styles from "./styles.module.css";

const Medias = ({ medias }: { medias: MediaEntity[] }) => {
  const [open, setOpen] = useState<null | number>(null);

  return (
    <div className={styles.container}>
      {medias
        .filter((media, index) => media.Categorie === 1 && index > 1)
        .map((media, index) => (
          <div className={styles.item} onClick={() => setOpen(index)}>
            <Media key={index} media={media} open={index === open} />
          </div>
        ))}
    </div>
  );
};

export default Medias;
