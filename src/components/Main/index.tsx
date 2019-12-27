import React from "react";

import styles from "./styles.module.scss";

const Main: React.FC<Props> = ({ photo, year, rooms, living, plot }) => (
  <div className={styles.element}>
    <img
      alt=""
      className={styles.image}
      src={photo.replace("_groot", "_1440x960")}
    />
    <div className={styles.recap}>
      <div className={styles.recapCell}>
        <img
          className={styles.recapIcon}
          alt="Year of construction"
          src={require("../../assets/images/ico-year.svg")}
        />
        <div className={styles.recapLabel}>Year of construction</div>
        <div>{year}</div>
      </div>

      <div className={styles.recapCell}>
        <img
          className={styles.recapIcon}
          alt="Number of rooms"
          src={require("../../assets/images/ico-rooms.svg")}
        />
        <div className={styles.recapLabel}>Number of rooms</div>
        <div>{rooms}</div>
      </div>

      <div className={styles.recapCell}>
        <img
          className={styles.recapIcon}
          alt="Living"
          src={require("../../assets/images/ico-living.svg")}
        />
        <div className={styles.recapLabel}>Living</div>
        <div>{living} m²</div>
      </div>

      <div className={styles.recapCell}>
        <img
          className={styles.recapIcon}
          alt="Plot"
          src={require("../../assets/images/ico-plot.svg")}
        />
        <div className={styles.recapLabel}>Plot</div>
        <div>{plot} m²</div>
      </div>
    </div>
  </div>
);

type Props = {
  photo: string;
  rooms: number;
  year: string;
  living: number;
  plot: number;
};

export default Main;
