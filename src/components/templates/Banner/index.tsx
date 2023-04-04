import { Box, Typography, Button, duration } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import mountainImg from '~assets/images/front-mountain.png'
import mountainRightImg from '~assets/images/front-mountain-right.png'
import mountainRightBgImg from '~assets/images/mountain-bg.png'
import mountainBackImg from '~assets/images/back-mountain.png'
import moonImg from '~assets/images/moon.png'
import bannerDivisionImg from '~assets/images/banner-division.png'
import { fontFamilyMixin, rem } from '~mixin';
import useThrottle from '~hooks/useThrottle';

export interface BannerProps {
}

const Banner: React.FC<BannerProps> = () => {
  const [windowScrollY, setWindowScrollY] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollEventHandler = (e: Event) => {
      const value = window.scrollY;
      if(containerRef.current && value > containerRef.current?.clientHeight) {
        return;
      }
      setWindowScrollY(value);
    }
    window.addEventListener('scroll',scrollEventHandler);

    return () => window.removeEventListener('scroll', scrollEventHandler);
  }, [])

  return (
    <Box className="t-banner" sx={{ color: 'white', position: 'relative', overflow: 'hidden' }} ref={containerRef}>
      <Box
        sx={{
          width: '100vw',
          zIndex: 1,
          position: 'relative',
          '& img': {
            width: '100%',
            height: {
              xs: rem(500),
              sm: 'unset',
            }
          }
        }}
      >
        <img src={mountainRightBgImg} alt="" />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: {
            xs: rem(50), 
            sm: 0,
          },
          width: '100vw',
          zIndex: 1,
          transform: `translateY(${windowScrollY * 2}px)`,
          '& img': {
            width: '100%',
          }
        }}
      >
        <img src={moonImg} alt="" />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          width: '100vw',
          zIndex: 1,
          transform: `translateY(${windowScrollY}px)`,
          '& img': {
            width: '100%',
            height: {
              xs: rem(500),
              sm: 'unset',
            }
          }
        }}
      >
        <img src={mountainBackImg} alt="" />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '100vw',
          top: 0,
          zIndex: 1,
          '& img': {
            width: '100%',
            height: {
              xs: rem(500),
              sm: 'unset',
            }
          }
        }}
      >
        <img src={mountainImg} alt="" />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          width: '100vw',
          zIndex: 3,
          '& img': {
            width: '100%',
            height: {
              xs: rem(500),
              sm: 'unset',
            }
          }
        }}
      >
        <img src={mountainRightImg} alt="" />
      </Box>
      <Box sx={{position: 'absolute', zIndex: 2, top: 0, width: '100%'}} className="animate animate-textMountain">
        <Box sx={{transform: `translateX(${windowScrollY * 2}px)`}}>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: rem(30),
                sm: rem(36),
                md: rem(44),
                lg: rem(52),
              },
              fontWeight: 800,
              lineHeight: {
                xs: rem(48),
                sm: rem(56),
                md: rem(65),
                lg: rem(72),
              },
              pt: {
                xs: rem(200),
                sm: rem(128),
                md: rem(174),
                lg: rem(220),
              },
              pr: {
                xs: rem(78),
                sm: rem(40),
              },
              ...fontFamilyMixin('jost'),
              '& .t-banner_name': { color: '#96CEB4' }
            }}
            variant="h2"
          >
            Hi, I’m <span className="t-banner_name">Huan</span>,<br />
            Front-end Developer
          </Typography>
          <Typography sx={{ mt: rem(28), textAlign: 'center', fontSize: rem(16), lineHeight: rem(22), display: {xs: 'none', sm: 'block'} }} variant='body1'>
            we are a design studio that has completed various projects in the field<br /> of technology to perfection.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '100vw',
          bottom: rem(-100),
          zIndex: 4,
          '& img': {
            width: '100%'
          }
        }}
      >
        <img src={bannerDivisionImg} alt="" />
      </Box>
      {/* <Box sx={{ display: 'flex', justifyContent: 'center', mt: rem(50) }}>
        <Button sx={{ fontSize: rem(18), borderRadius: rem(8), color: 'white', fontWeight: 700, backgroundColor: '#4C40F7', px: rem(30), py: rem(18) }}>
          Get Started
        </Button>
      </Box> */}
    </Box>
  )
};

Banner.defaultProps = {
  children: undefined,
};

export default Banner;

