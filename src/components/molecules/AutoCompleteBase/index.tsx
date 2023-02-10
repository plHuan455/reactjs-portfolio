import { Autocomplete, Box, Chip, TextField } from '@mui/material';
import React, { useState } from 'react';

export interface AutoCompleteOptionTypes {
  id: string;
  label: string;
}

export interface AutoCompleteBaseProps {
  value: AutoCompleteOptionTypes[];
  options: AutoCompleteOptionTypes[];
  label?: string;
  placeholder?: string;
  onChange?: (value: AutoCompleteOptionTypes[]) => void;
}

const AutoCompleteBase: React.FC<AutoCompleteBaseProps> = ({
  value,
  options,
  label,
  placeholder,
  onChange,
}) => {
  const [addOnOption, setAddOnOption] = useState<AutoCompleteOptionTypes | undefined>();

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if(value.match(/.+/g) && !options.some(option => option.label === value)){
      setAddOnOption({id: Date.now().toString(), label: value})
    }
    else {
      setAddOnOption(undefined)
    }
  }
  return (
    <Autocomplete
        multiple
        options={addOnOption ? [addOnOption, ...options] : options}
        value={value}
        getOptionLabel={(option) => option.label}
        onChange={(e, value) => onChange && onChange(value)}
        filterSelectedOptions
        isOptionEqualToValue={(option, value) => option.label === value.label}
        autoHighlight
        onInput={handleOnInput}
        renderTags={(value: readonly AutoCompleteOptionTypes[], getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option.label} {...getTagProps({ index })} key={option.id}/>
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label={label}
            placeholder={placeholder}
          />
        )}
      />
  )
};

export default AutoCompleteBase;

