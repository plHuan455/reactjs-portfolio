import { LoadingButton } from '@mui/lab';
import { Box, FormGroup, TextField, Typography } from '@mui/material';
import React from 'react';
import { FormProvider, UseFormReturn, Controller } from 'react-hook-form';
import { rem } from '../../../styles/mixins';

export interface VocabularyCreateEditType {
  mean?: string;
  description?: string;
  suggestion?: string;
  word?: string;
  image?: string;
}

export interface VocabularyCreateEditProps {
  title: string;
  method: UseFormReturn<VocabularyCreateEditType>
}

const VocabularyCreateEdit: React.FC<VocabularyCreateEditProps> = ({
  title,
  method
}) => {
  return (
    <Box className="t-vocabularyCreateEdit">
      <FormProvider {...method}>
        <FormGroup sx={{mt: rem(24)}}>
          <Box>
            <Controller
              name="word" 
              render={({field: {value, onChange}, fieldState}) => (
                <TextField value={value} onChange={onChange} label="Từ vựng " variant="outlined" fullWidth required
                  error={Boolean(fieldState.error?.message)} helperText={fieldState.error?.message}
                />
              )}
            />
          </Box>
          <Box sx={{mt: rem(24)}}> 
            <Controller
              name="mean" 
              render={({field: {value, onChange}, fieldState}) => (
                <TextField value={value} onChange={onChange} label="Nghĩa" variant="outlined" fullWidth required
                  error={Boolean(fieldState.error?.message)} helperText={fieldState.error?.message}
                />
              )}
            />
          </Box>
          <Box sx={{mt: rem(24)}}>
            <Controller
              name="description" 
              render={({field: {value, onChange}, fieldState}) => (
                <TextField value={value} onChange={onChange} label="Mô tả" variant="outlined" fullWidth 
                  error={Boolean(fieldState.error?.message)} helperText={fieldState.error?.message}
                />
              )}
            />
          </Box>

          <Box>
            <LoadingButton>
              Tạo từ vựng
            </LoadingButton>
          </Box>
        </FormGroup>
      </FormProvider>
    </Box>
  )
};

export default VocabularyCreateEdit;

