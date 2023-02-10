import React from 'react';
import { Box, Typography } from "@mui/material";
import Image from '~atoms/Image';
import { rem } from '../../../styles/mixins';


export interface VocabularyCardProps {
  word: string;
  mean: string;
  image: string;
  description: string;
  SuggestionLabel: string;
}

const VocabularyCard: React.FC<VocabularyCardProps> = ({
  word,
  mean,
  image,
  description,
  SuggestionLabel
}) => {
  return (
    <Box className="o-vocabularyCard" sx={{borderRadius: rem(4), overflow: 'hidden'}}>
      <Box 
        sx={{
          width: '100%',
          aspectRatio: '4 / 3',
          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }}
      >
        <img src={image} />
      </Box>
      <Typography align='right' sx={{fontSize: rem(16), lineHeight: rem(20), fontWeight: 500}}>
        {word}
      </Typography>
      <Typography sx={{textAlign: 'justify', mt: (theme) => theme.spacing(12)}}>
        {description}
      </Typography>
    </Box>
  )
};

export default VocabularyCard;

