import * as React from 'react';
import { Box } from '@mui/material';
import { mapModifiers } from '../../../utils/funcs';
import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";

export interface ImageProps {
  sx?: SxProps<Theme>;
  sxImg?: SxProps<Theme>;
  src: string;
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ sx, src, alt='' }) => {
  return (
    <Box className='a-image' sx={{
      '& img': {
        width: '100%',
      },
      ...sx,
    }}>
      <img src={src} alt={alt} />
    </Box>
  );
}

export default Image;
