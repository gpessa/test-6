import React from "react";
import { MediaEntity } from "../../types";

import styles from "./styles.module.css";

const Medias = ({ medias }: { medias: MediaEntity[] }) => (
  <div className={styles.container}>
    {medias
      .filter(media => media.Categorie === 1)
      .map((media, key) => (
        <img key={key} src={media.MediaItems[1].Url} className={styles.item} />
      ))}
  </div>
);

export default Medias;
