import { Box, Typography, Button  } from '@mui/material';
import React from 'react';
import icon1 from '~assets/icons/ic_1.svg';
import icon2 from '~assets/icons/ic_2.svg';
import icon3 from '~assets/icons/ic_3.svg';
import icon4 from '~assets/icons/ic_4.svg';
import { fontFamilyMixin, rem } from '~mixin';
import Container from '~organisms/Container';

export interface BannerProps {
}

const Banner: React.FC<BannerProps> = () => {
  return (
    <Box className="t-banner" sx={{ color: 'white', pt: rem(80) }}>
      <Container sx={{position: 'relative'}}>
        <Box sx={{position: 'absolute' }}><img src={icon1} alt=''/></Box>
        <Box sx={{position: 'absolute', bottom: 0}}><img src={icon2} alt=''/></Box>
        <Box sx={{position: 'absolute', right: 0}}><img src={icon3} alt=''/></Box>
        <Box sx={{position: 'absolute', right: 0, bottom: 0}}><img src={icon4} alt=''/></Box>
        <Box sx={{position: 'relative', zIndex: 1, pb: rem(40)}}>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: rem(58), fontWeight: 700,
              lineHeight: rem(80),
              ...fontFamilyMixin('jost'),
              '& .t-banner_name': { color: '#96CEB4'}
            }}
            variant="h2"
          >
            Hi, I’m <span className="t-banner_name">Huan</span>,<br />
            Front-end Developer
          </Typography>
          <Typography sx={{mt: rem(28), textAlign: 'center', fontSize: rem(21) }} variant='body1'>
            we are a design studio that has completed various projects in the field<br /> of technology to perfection.
          </Typography>
          <Box sx={{display: 'flex', justifyContent: 'center', mt: rem(50)}}>
            <Button sx={{fontSize: rem(18), borderRadius: rem(8), color: 'white', fontWeight: 700, backgroundColor: '#4C40F7', px: rem(30), py: rem(18)}}>
              Get Started
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
};

Banner.defaultProps = {
  children: undefined,
};

export default Banner;

