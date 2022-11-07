import * as React from 'react';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import {AiOutlineSearch} from 'react-icons/ai';

export interface SearchInputProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'> {
  value: string;
  onChange?: (value: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, ...args}: SearchInputProps) => {
  return (
    <div className="m-searchInput">
      <input 
        {...args} 
        value={value}
        className="m-searchInput_input" 
        type='text' 
        onChange={(e)=> {if(onChange) onChange(e.target.value)}}
      />
      <div className="m-searchInput_icon">
        <Icon modifiers={['18x18', 'deepKoamaru']}>
          {AiOutlineSearch}
        </Icon>
      </div>
    </div>
    
  );
}

export default SearchInput;
