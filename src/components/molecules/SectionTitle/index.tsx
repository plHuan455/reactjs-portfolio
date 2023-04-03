import React from 'react';
import { Box, Typography } from '@mui/material';
import { rem } from '~mixin';
import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";

export interface SectionTitleProps {
  title: string;
  subtitle: string;
  sx?: SxProps<Theme>;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  sx,
}) => {
  return (
    <Box className="m-sectionTitle" sx={sx}>
      <Typography
        variant='body2'
        sx={{
          fontSize: rem(18),
          textTransform: 'uppercase',
          letterSpacing: "0.175em",
          textAlign: 'center',
          color: '#FFAD60'
        }}>
        {subtitle}
      </Typography>
      <Typography variant='h5' sx={{ fontSize: rem(42), fontWeight: 800, color: 'white', textAlign: 'center', mt: rem(16) }}>
        {title}
      </Typography>
    </Box>
  )
};

export default SectionTitle;

