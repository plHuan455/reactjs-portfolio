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
  isLoading?: boolean;
  title: string;
  submitLabel?: string;
  method: UseFormReturn<VocabularyCreateEditType>,
  onSubmit: (values : VocabularyCreateEditType) => void;
}

const VocabularyCreateEdit: React.FC<VocabularyCreateEditProps> = ({
  isLoading,
  submitLabel = 'Tạo từ vựng',
  title,
  method,
  onSubmit,
}) => {
  return (
    <Box className="t-vocabularyCreateEdit">
      <Typography sx={{fontWeight: 600, fontSize: rem(20)}}>{title}</Typography>
      <FormProvider {...method}>
        <FormGroup sx={{mt: rem(24)}} onSubmit={method.handleSubmit(onSubmit)}>
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
          <Box sx={{mt: rem(24)}}>
            <Controller
              name="image" 
              render={({field: {value, onChange}, fieldState}) => (
                <TextField value={value} onChange={onChange} label="Link hình ảnh" variant="outlined" fullWidth placeholder='https://picsum.photos/300/300'
                  error={Boolean(fieldState.error?.message)} helperText={fieldState.error?.message}
                />
              )}
            />
          </Box>

          <Box sx={{textAlign: 'right', mt: rem(16)}}>
            <LoadingButton
              loading={isLoading}
              sx={{backgroundColor: 'rgb(45, 104, 254)', color: 'white', '&:hover': { backgroundColor: 'rgb(109, 150, 253)'}}}
              onClick={() => method.handleSubmit(onSubmit)()}
            >
              {submitLabel}
            </LoadingButton>
          </Box>
        </FormGroup>
      </FormProvider>
    </Box>
  )
};

export default VocabularyCreateEdit;

