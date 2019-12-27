import PropTypes, { InferProps } from "prop-types";
import React from "react";

import styles from "./styles.module.scss";

const Main: React.FC<Props> = ({ photo, year, rooms, living, plot }) => {
  const data = [
    {
      icon: require("../../assets/images/ico-year.svg"),
      label: "Year of construction",
      value: year
    },
    {
      icon: require("../../assets/images/ico-rooms.svg"),
      label: "Number of rooms",
      value: rooms
    },
    {
      icon: require("../../assets/images/ico-living.svg"),
      label: "Living",
      value: `${living} m²`
    },
    {
      icon: require("../../assets/images/ico-plot.svg"),
      label: "Plot",
      value: `${plot} m²`
    }
  ];

  return (
    <div className={styles.element}>
      <img
        alt=""
        className={styles.image}
        src={photo.replace("_groot", "_1440x960")}
      />
      <div className={styles.recap}>
        {data.map(({ icon, label, value }) => (
          <div className={styles.recapCell}>
            <img className={styles.recapIcon} alt={label} src={icon} />
            <div className={styles.recapLabel}>{label}</div>
            <div>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const propTypes = {
  photo: PropTypes.string.isRequired,
  rooms: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  living: PropTypes.number.isRequired,
  plot: PropTypes.number.isRequired
};

Main.propTypes = propTypes;

type Props = InferProps<typeof propTypes>;

export default Main;
