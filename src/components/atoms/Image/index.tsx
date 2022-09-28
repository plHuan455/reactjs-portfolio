import * as React from 'react';
import { mapModifiers } from '../../../utils/funcs';

export interface ImageProps {
  src: string;
  alt?: string;
  ratio?: Ratio;
}

export default function Image ({src, ratio, alt = ''}: ImageProps) {
  return (
    <div className={mapModifiers('a-image', ratio??'')}>
      <img src={src} alt={alt} />
    </div>
  );
}
