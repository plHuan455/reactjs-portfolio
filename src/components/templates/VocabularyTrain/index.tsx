import React from 'react';
import { Box } from '@mui/material';
import Container from '~organisms/Container';
import WordTrainCard from '~molecules/WordTrainCard';
import { rem } from '../../../styles/mixins';

export interface VocabularyTrainTypes {
  id: string;
  mean: string;
  word: string;
  imgSrc: string;
}

export interface VocabularyTrainProps {
  wordList: VocabularyTrainTypes[];
  onCorrect: (id: string) => void;
  onUnCorrect: (id: string) => void;
  onFailIconClick: (id: string) => void;
}

const VocabularyTrain: React.FC<VocabularyTrainProps> = ({
  wordList,
  onCorrect,
  onUnCorrect,
  onFailIconClick,
}) => {
  return (
    <Box className="t-vocabularyTrain">
      <Container>
        <Box sx={{display: 'flex', flexWrap: 'wrap', margin: rem(-20)}}>
          {wordList.map(value => (
            <Box sx={{maxWidth: rem(300), padding: rem(20)}} key={`key-vocabulary-train-${value.id}`}>
              <WordTrainCard
                imgSrc={value.imgSrc}
                mean={value.mean}
                word={value.word}
                onCorrect={() => onCorrect(value.id)}
                onUnCorrect={() => onUnCorrect(value.id)}
                onFailIconClick={() => onFailIconClick(value.id)}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
};

export default VocabularyTrain;

