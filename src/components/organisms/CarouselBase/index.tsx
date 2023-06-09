import React, { useEffect, useRef, useState } from 'react';
import { Box, Button } from '@mui/material';
import Slider, { Settings, CustomArrowProps } from "react-slick";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { rem, resetButton, baseBoxShadow } from '~mixin';
import useOnScreen from '~hooks/useOnScreen';

export interface CarouselBaseProps {
  children: React.ReactNode;
  settings?: Settings;
}

interface ArrowProps extends CustomArrowProps {
  variant: 'right' | 'left' 
}

const CustomArrow: React.FC<ArrowProps> = ({onClick, style, className, variant}) => {

  const ArrowIcon = variant === 'right' ? ArrowForwardIosIcon : ArrowBackIosNewIcon;
  return (
    <Button 
      sx={{
        ...resetButton,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', 
        top: '50%', 
        right: variant === 'right' ? 0 : 'unset',
        left: variant === 'left' ? 0 : 'unset',
        transform: 'translateY(-50%)', 
        width: rem(32), 
        height: rem(32),
        borderRadius: '50%',
        backgroundColor: 'rgb(198 224 250 / 70%)',
        boxShadow: baseBoxShadow,
        '&: hover': { backgroundColor: 'rgb(198 224 250 / 90%)'},
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <ArrowIcon sx={{fontSize: rem(18)}}/>
    </Button>
  )
}


const CarouselBase: React.FC<CarouselBaseProps> = ({children, settings}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const defaultSettings: Settings  = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrow variant='right' />,
    prevArrow: <CustomArrow variant='left' />,
    ...settings
  }

  return (
    <Box 
      className="o-carouselBase"
      sx={{
        '& .slick-dots li button:before': {
          color: '#81bdf738',
          opacity: 1,
        },
        '& .slick-dots li.slick-active button:before': {
          color: 'white'
        }
      }}
      ref={containerRef}
    >
      <Slider {...defaultSettings}>
        {children}
      </Slider>
    </Box>
  )
};

CarouselBase.defaultProps = {
  children: undefined,
};

export default CarouselBase;

