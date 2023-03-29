import { LoadingButton } from '@mui/lab';
import { Autocomplete, Box, Chip, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller, FormProvider, UseFormReturn } from 'react-hook-form';
import AutoCompleteBase, { AutoCompleteOptionTypes } from '~molecules/AutoCompleteBase';

export interface AddMemberFormFields {
  usernames: AutoCompleteOptionTypes[];
}

export interface AddGroupMemberFormProps {
  isFormLoading?: boolean,
  method: UseFormReturn<AddMemberFormFields>;
  onSubmit: (values: AddMemberFormFields) => void;
} 

const AddGroupMemberForm: React.FC<AddGroupMemberFormProps> = ({
  isFormLoading,
  method,
  onSubmit,
}) => {
  const options: AutoCompleteOptionTypes[] = [{id: '2131231', label: 'conchon2'}, {id: 'as213213', label: 'plhuan3'}] 
  return (
    <Box className="t-addGroupMemberForm">
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(onSubmit)}>
          <Box>
            <Typography>Thêm thành viên</Typography>
          </Box>
          <Box sx={{mt: (theme) => theme.spacing(16)}}>
            <Controller 
              name="usernames"
              render={({field: {value, onChange}}) => (
                <AutoCompleteBase 
                  value={value}
                  options={options}
                  label={"Add Members"}
                  placeholder={"Enter usernames"}
                  onChange={onChange}
                />
              )}  
            />
          </Box>
          <Box sx={{mt: (theme) => theme.spacing(12), display: 'flex', justifyContent: 'flex-end'}}>
            <LoadingButton
              loading={isFormLoading}
              variant='outlined'
              type='submit'
            >
              Thêm
            </LoadingButton>
          </Box>
        </form>
      </FormProvider>
    </Box>
  )
};

export default AddGroupMemberForm;

