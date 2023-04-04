import React from 'react';
import { Box, Typography } from '@mui/material';
import ContainerBase from '~organisms/ContainerBase';
import { rem } from '~mixin';
import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";

export interface FooterProps {
  sx?: SxProps<Theme>;
}

const Footer: React.FC<FooterProps> = ({sx}) => {
  return (
    <Box className="t-footer" sx={sx}>
      <ContainerBase>
        <Typography sx={{color: '#a5a5a5', textAlign: 'right', py: rem(24)}}>
          © 2023 Pham Long Huan's Personal Website, All Rights Reserved
        </Typography>
      </ContainerBase>
    </Box>
  )
};

export default Footer;

