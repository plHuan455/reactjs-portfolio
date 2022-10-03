import * as React from 'react';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';

export interface SearchInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  value: string;
  handleChange?: (value: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ value, handleChange, ...args}: SearchInputProps) => {
  return (
    <div className="m-searchInput">
      <input 
        {...args} 
        value={value}
        className="m-searchInput_input" 
        type='text' 
        onChange={(e)=> {if(handleChange) handleChange(e.target.value)}}
      />
      <div className="m-searchInput_icon">
        <Icon iconName='searchBlack' size='24x25'/>
      </div>
      <div className="m-searchInput_button">
        <Button>
          Tìm kiếm
        </Button>
      </div>
      
    </div>
    
  );
}

export default SearchInput;
