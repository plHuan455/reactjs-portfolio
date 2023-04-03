import React from 'react';
import Lightbox from "yet-another-react-lightbox";
import { Zoom, Thumbnails  } from "yet-another-react-lightbox/plugins"

export interface LightBoxImageType {
  src: string;
  alt?: string;
}

export interface LightBoxBaseProps {
  slides: LightBoxImageType[];
  open?: boolean;
  onClose?: () => void;
}

const LightBoxBase: React.FC<LightBoxBaseProps> = ({
  slides,
  open,
  onClose
}) => {
  return (
    <Lightbox
      open={open}
      close={onClose}
      plugins={[Thumbnails, Zoom]}
      slides={slides}
      thumbnails={{
        position: 'bottom',
        width: 80,
        height: 44,
        border: 1,
        borderRadius: 4,
        padding: 4,
        gap: 16,
        showToggle: true,
      }}
    />
  )
};

export default LightBoxBase;

