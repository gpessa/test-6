import { useState } from "react";
import { MediaEntity } from "../../types";

const useGallery: (
  medias: MediaEntity[]
) => {
  pictures: MediaEntity[];
  active: MediaEntity | null;
  showPreviousDisabled: boolean;
  showNextDisabled: boolean;
  showPrevious: () => void;
  showNext: () => void;
  close: () => void;
  open: (picture: MediaEntity) => void;
} = medias => {
  const [selected, setSelected] = useState<null | number>(null);
  const pictures = medias.filter(media => media.Categorie === 1);

  const close = () => setSelected(null);

  const open = (picture: MediaEntity) => {
    const index = pictures.indexOf(picture);
    setSelected(index);
  };

  const showNext = () => setSelected(setSelected => setSelected! + 1);

  const showPrevious = () => setSelected(setSelected => setSelected! - 1);

  const showPreviousDisabled = selected! > 0 ? false : true;
  const showNextDisabled = selected! < pictures.length - 1 ? false : true;
  const active = selected != null ? pictures[selected] : null;

  return {
    showPreviousDisabled,
    showNextDisabled,
    showPrevious,
    showNext,
    pictures,
    active,
    close,
    open
  };
};

export default useGallery;
