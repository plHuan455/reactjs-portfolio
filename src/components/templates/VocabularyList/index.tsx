import React from 'react';
import VocabularyCard from '~organisms/VocabularyCard';
import { Grid, Box } from '@mui/material';
import { rem } from '../../../styles/mixins';
import Container from '~organisms/Container';

export interface VocabularyTypes {
  id: number;
  word: string;
  mean: string;
  image: string;
  description: string;
  SuggestionLabel: string;
}

export interface VocabularyListProps {
  vocabularyList: VocabularyTypes[]
}

const VocabularyList: React.FC<VocabularyListProps> = ({
  vocabularyList
}) => {
  return <div className="t-vocabularyList">
    <Container>
      <Grid container spacing={2}>
        {vocabularyList.map(value => (
          <Grid item xs={3} >
            <VocabularyCard {...value} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </div>
};

export default VocabularyList;

