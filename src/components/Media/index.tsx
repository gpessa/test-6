import React, { useRef, useLayoutEffect } from "react";
import { MediaEntity } from "../../types";

import styles from "./styles.module.css";

const Media: React.FC<Props> = ({ media, open }) => {
  const refImage = useRef<HTMLImageElement>(null);
  const refImageZoomed = useRef<HTMLDivElement>(null);

  useLayoutEffect(
    () => {
      if (!open) return;

      const { width, height, top, left } = refImage.current!.getBoundingClientRect();

      refImageZoomed.current!.style.width = `${width}px`;
      refImageZoomed.current!.style.height = `${height}px`;
      refImageZoomed.current!.style.left = `${left}px`;
      refImageZoomed.current!.style.top = `${top}px`;
      refImageZoomed.current!.style.position = 'fixed';

      refImageZoomed.current?.classList.add(styles.imageZoomed)
    },
    [open],
  );

  return (
    <div className={styles.element}>
      <img className={styles.image} src={media.MediaItems[2].Url} alt="" ref={refImage} />
      <div className={styles.imageFake} style={{ backgroundImage: `url(${media.MediaItems[3].Url})` }} ref={refImageZoomed} />
    </div>
  )
};

type Props = {
  media: MediaEntity,
  open: boolean
}


export default Media;