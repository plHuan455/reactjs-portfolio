import { Box, Typography, Button, duration } from '@mui/material';
import React, { useEffect, useRef, useState, useTransition } from 'react';
import { motion } from 'framer-motion';
import mountainImg from '~assets/images/front-mountain.png'
import mountainRightImg from '~assets/images/front-mountain-right.png'
import mountainRightBgImg from '~assets/images/mountain-bg.png'
import mountainBackImg from '~assets/images/back-mountain.png'
import moonImg from '~assets/images/moon.png'
import bannerDivisionImg from '~assets/images/banner-division.png'
import { fontFamilyMixin, rem } from '~mixin';
import _ from 'lodash';
import useThrottle from '~hooks/useThrottle';
// import useThrottle from '~hooks/useThrottle';

export interface BannerProps {
  isOnScreen?: boolean;
}

const Banner: React.FC<BannerProps> = ({ isOnScreen }) => {
  const [windowScrollY, setWindowScrollY] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const scrollEventHandler = (e: Event) => {
  //     const value = window.scrollY;
  //     if (containerRef.current && value > containerRef.current?.clientHeight) {
  //       return;
  //     }
  //       setWindowScrollY(value);
  //   }
  //   const throttledHandleScroll = _.throttle(scrollEventHandler, 1000);
  //   window.addEventListener('scroll', throttledHandleScroll);

  //   return () => window.removeEventListener('scroll', throttledHandleScroll);
  // }, [])

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
            sm: rem(10),
          },
          width: '100vw',
          zIndex: 1,
          transitionDuration: '1.5s',
          '& img': {
            width: '100%',
          }
        }}

        style={{transform: isOnScreen ? 'translateY(0)' : `translateY(100vh)`}}
      >
        <img src={moonImg} alt="" />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          width: '100vw',
          zIndex: 1,
          transitionDuration: '0.7s',
          '& img': {
            width: '100%',
            filter: 'brightness(0.65)',
            height: {
              xs: rem(500),
              sm: 'unset',
            }
          }
        }}
        style={{transform: isOnScreen ? 'translateY(0)' : `translateY(100vh)`}}
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
      <Box sx={{ position: 'absolute', zIndex: 2, top: 0, width: '100%' }} className="animate animate-textMountain">
        <Box
          sx={{
            transitionDuration: '0.7s',
            pr: {
              xs: rem(60),
              sm: rem(16),
            },
          }}
          style={{transform: isOnScreen ? 'translateX(0)' : `translateX(100vw)`}}
          >
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
                md: rem(160),
                lg: rem(220),
              },
              ...fontFamilyMixin('jost'),
              '& .t-banner_name': { color: '#96CEB4' }
            }}
            variant="h2"
          >
            Hi, I’m <span className="t-banner_name">Huan</span>,<br />
            Front-end Developer
          </Typography>
          <Typography sx={{ mt: rem(28), textAlign: 'center', fontSize: rem(16), lineHeight: rem(22), display: { xs: 'none', sm: 'block' } }} variant='body1'>
            Let's explore more information about me and<br /> the projects I have worked on in the past.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '100vw',
          bottom: {
            xs: rem(-45),
            md: rem(-68),
            lg: rem(-105),
          },
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

export default Banner;

