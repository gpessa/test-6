import React, { useRef, useLayoutEffect } from "react";
import { MediaEntity } from "../../types";

import styles from "./styles.module.scss";

const Media: React.FC<Props> = ({ media, open }) => {
  return <img className={styles.image} src={media.MediaItems[2].Url} alt="" />;
};

type Props = {
  media: MediaEntity;
  open: boolean;
};

export default Media;
