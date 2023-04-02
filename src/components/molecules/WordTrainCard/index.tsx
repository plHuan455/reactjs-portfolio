import React, { useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { rem, baseBoxShadow, textOverflowMixin } from '../../../styles/mixins';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export interface WordTrainCardProps {
  word: string;
  mean: string;
  imgSrc: string;
  onCorrect?: () => void;
  onUnCorrect?: () => void;
  onFailIconClick?: () => void;
}

const WordTrainCard: React.FC<WordTrainCardProps> = ({
  word,
  mean,
  imgSrc,
  onCorrect,
  onUnCorrect, 
  onFailIconClick,
}) => {
  const valueRef = useRef<string>('');
  const [isShowImg, setIsShowImg] = useState<boolean>(false);
  const [isTrue, setIsTrue] = useState<boolean>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    valueRef.current = value;
    // setValue(value);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const isCorrect = isEqualStr(valueRef.current, mean);
    if (e.key === 'Enter') {
      isCorrect && onCorrect && onCorrect();
      !isCorrect && onUnCorrect && onUnCorrect();
      setIsTrue(isCorrect);
      return;
    }

    if (isTrue) {
      setIsTrue(isCorrect ? true : undefined);
    }
  }

  const isEqualStr = (value: string, mean: string) => {
    return value.toLowerCase() === mean.toLowerCase();
  }

  return (
    <Box className="m-wordTrainCard" sx={{ backgroundColor: 'white', borderRadius: rem(8), position: 'relative', zIndex: isShowImg ? 11 : 10, boxShadow: baseBoxShadow }}>
      <Box sx={{ padding: rem(12) }}>
        <Typography sx={{ fontSize: rem(16), lineHeight: rem(20), color: '#324054' }}>
          {word}    
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            mt: rem(8),
            '& input': {
              border: 0,
              outline: 'none',
              margin: 0,
              padding: 0,
              pr: rem(24),
              width: '100%', display: 'block',
              backgroundColor: 'transparent',
              color: '#324054',
              fontSize: rem(20), lineHeight: rem(24)
            }
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <input
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsShowImg(true)}
              onBlur={() => setIsShowImg(false)}
            />
            {isTrue === true && <TaskAltIcon sx={{ position: 'absolute', right: 0, top: 0, color: '#198754' }} />}
            {isTrue === false && (
              <HighlightOffIcon 
                sx={{ position: 'absolute', right: 0, top: 0, color: 'rgb(220, 53, 69)' }} 
                onClick={() => onFailIconClick && onFailIconClick()}/>
            )}
          </Box>
        </Box>
      </Box>
      {isShowImg && (
      <Box
        sx={{
          position: 'absolute',
          top: "100%", aspectRatio: '4 / 3',
          left: 0,
          width: "100%",
          boxShadow: baseBoxShadow,
          '& img': {
            objectFit: 'cover', width: '100%', height: '100%'
          }
        }}
      >
        <img src={imgSrc} alt='' />
      </Box>)}
    </Box>
  )
};

export default WordTrainCard;

