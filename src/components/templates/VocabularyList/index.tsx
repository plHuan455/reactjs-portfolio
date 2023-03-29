import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import VocabularyCard from '~organisms/VocabularyCard';
import { Grid, Box, Typography, Button } from '@mui/material';
import { rem, resetButton } from '../../../styles/mixins';
import AddIcon from '@mui/icons-material/Add';
import Container from '~organisms/Container';
import DropdownControl from '~molecules/DropdownControl';

export interface VocabularyTypes {
  id: string;
  word: string;
  mean: string;
  image: string;
  description: string;
  SuggestionLabel: string;
}

export interface VocabularyListProps {
  vocabularyList: VocabularyTypes[];
  onAddClick?: () => void;
  onDeleteClick: (id: string) => void;
  onUpdateClick: (id: string) => void;
}

const VocabularyList: React.FC<VocabularyListProps> = ({
  vocabularyList,
  onAddClick,
  onDeleteClick,
  onUpdateClick,
}) => {
  return <div className="t-vocabularyList">
    <Container>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Typography sx={{fontWeight: 600, fontSize: rem(20)}} variant='h2'>
          Dánh sách từ vựng
        </Typography>
        <Button sx={{ml: rem(8), ...resetButton}} onClick={onAddClick}>
          <AddIcon />
        </Button>
      </Box>
      <Grid container spacing={8} sx={{mt: rem(12)}}>
        {vocabularyList.map(value => (
          <Grid 
            item 
            xs={6}
            sm={3}
            key={`t-vocabularyList-card-${value.id}`}
          >
            <VocabularyCard {...value} onUpdateClick={() => onUpdateClick(value.id)} onDeleteClick={()=> onDeleteClick(value.id)}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  </div>
};

export default VocabularyList;

