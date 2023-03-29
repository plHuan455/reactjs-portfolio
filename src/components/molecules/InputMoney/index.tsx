import React, { useState } from 'react';
import { Autocomplete, Box, Button, FormLabel, MenuItem, TextField } from '@mui/material';
import { rem } from '../../../styles/mixins';
import { numberToMoney, numberToRand } from '../../../utils/funcs';

export interface InputMoneyProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'onInput'> {
  id?: string;
  label?: string;
  options: number[];
  value: number;
  onChange?: (value: number) => void;
}

const InputMoney: React.FC<InputMoneyProps> = ({
  id,
  label,
  value,
  options,
  onChange,
  ...props
}) => {
  const convertedValue = Math.abs(value);
  const [isPositive, setIsPositive] = useState<boolean>(true);

  const [moneyOptions, setMoneyOptions] = useState<number[]>([]);

  const handleChange = (value: number) => {
    onChange && onChange(isPositive ? value * -1 : value);
  }

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const value: number = Number((e.target as HTMLInputElement).value);
    if(isNaN(value)) {
      setMoneyOptions([]);
      return;
    }
    let newOptions: number[] = [];
    for(let i = 4; i <= 8; i ++) {
      const num = numberToRand(value, i)
      if(num > value) newOptions.push(num);
    }
    if(value >= 1000 && !newOptions.includes(value)) {
      newOptions.unshift(value);
    }

    setMoneyOptions(newOptions)
  }
  return (
    <Box className="m-inputMoney">
      {label !== undefined && (
        <Box sx={{
          '& .m-inputMoney_label': {
            fontSize: (theme) => theme.spacing(14), lineHeight: (theme) => theme.spacing(20), color: '#000000',
          }
        }}>
          <label
            className='m-inputMoney_label'
            htmlFor={id}

          >
            {label}
          </label>
        </Box>
      )}
      <Box
      >
        <Autocomplete
          sx={{
            '& .MuiOutlinedInput-root.MuiInputBase-sizeSmall .MuiAutocomplete-input': {
              py: rem(4)
            },
            '& .MuiOutlinedInput-root.MuiInputBase-sizeSmall': {
              py: 0,
              pl: rem(30),
            },
            '& .MuiInputBase-input': {
              fontSize: rem(14),
              lineHeight: rem(20),
              color: isPositive ? '#DC3545' : '#21a96a'
            },
            '& .MuiOutlinedInput-notchedOutline': {
              px: 0,
              borderColor: 'rgb(227, 227, 229) !important',
              borderWidth: `${rem(1)} !important`
            },
          }}
          size='small'
          value={convertedValue}
          autoHighlight
          options={[...moneyOptions]}
          onChange={(e, value) => handleChange(value ?? 0)}
          isOptionEqualToValue={(option, value) => option === value}
          getOptionLabel={(option) => numberToMoney(option)}
          onInput={handleInput}
          filterOptions={(options, state) => {
            return options
          }}
          renderInput={(params) => {
            return(
            <Box sx={{ position: 'relative' }}>
              <TextField {...params} size="small" id={id}/>
              <Box sx={{ width: rem(28), height: '100%', position: 'absolute', left: 0, top: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button
                  sx={{
                    padding: 0,
                    minWidth: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: isPositive ? '#DC3545' : '#21a96a',
                    color: '#ffffff',
                    '&: hover': {
                      backgroundColor: isPositive ? '#f15464' : '#43E398'
                    }
                  }}
                  onClick={()=> {
                    setIsPositive(preState => {
                      onChange && onChange(!preState ? 1* convertedValue : convertedValue)
                      return !preState;
                    });
                  }}
                >
                  {isPositive ? '-': '+'}
                </Button>
              </Box>
            </Box>

          )}}
        />
      </Box>
    </Box>
  )
};

export default InputMoney;

