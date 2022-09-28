import * as React from 'react';
import Icon from '../../atoms/Icon';

export interface SearchInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}

const SearchInput: React.FC<SearchInputProps> = ({...args}: SearchInputProps) => {
  return (
    <div className="m-searchInput">
      <input className="m-searchInput_input" {...args} />
      <div className="m-searchInput_icon">
        <Icon iconName='searchBlack' size='24x25'/>
      </div>
      
    </div>
    
  );
}

export default SearchInput;
