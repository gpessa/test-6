import React from "react";

import { MediaEntity } from "../../types";
import styles from "./styles.module.scss";
import Button from "../Button";
import { useGallery } from "../../hooks";

const Medias: React.FC<Props> = ({ medias }) => {
  const {
    showPreviousDisabled,
    showNextDisabled,
    showPrevious,
    showNext,
    pictures,
    active,
    close,
    open
  } = useGallery(medias);

  return (
    <>
      {active !== null && (
        <div className={styles.modal} onClick={close}>
          <Button
            disabled={showPreviousDisabled}
            className={`${styles.modalPreviousButton} ${styles.modalButton}`}
            onClick={e => {
              e.stopPropagation();
              showPrevious();
            }}
          >
            Back
          </Button>
          <img
            className={styles.modalImage}
            src={active.MediaItems[3].Url}
            alt=""
          />
          <Button
            disabled={showNextDisabled}
            className={`${styles.modalNextButton} ${styles.modalButton}`}
            onClick={e => {
              e.stopPropagation();
              showNext();
            }}
          >
            Next
          </Button>
        </div>
      )}
      <div className={styles.medias}>
        {pictures.map(picture => (
          <div onClick={() => open(picture)}>
            <img
              className={styles.mediasItem}
              src={picture.MediaItems[2].Url}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
};

interface Props {
  medias: MediaEntity[];
}

export default Medias;
