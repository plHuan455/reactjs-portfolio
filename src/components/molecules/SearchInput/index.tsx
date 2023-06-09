import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import {AiOutlineSearch} from 'react-icons/ai';
import Image from '~atoms/Image';
import Text from '~atoms/Text';
import { mapModifiers } from '../../../utils/funcs';
import useClickOutside from '~hooks/useClickOutside';
import { useRef } from 'react';
import Loading from '~atoms/Loading';
import {Box} from '@mui/material';

export interface SearchItemTypes {
  id?: string;
  avatarSrc?: string;
  title: string;
  description?: string;
}

type SearchModifiers = 'hasBorder';

export interface SearchInputProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'> {
  isLoading?: boolean;
  value: string;
  searchList?: SearchItemTypes[];
  isShowSearchList?: boolean;
  isNoIcon?: boolean;
  modifiers?: SearchModifiers | SearchModifiers[];
  onChange?: (value: string) => void
  onOpenSearchList?: () => void;
  onCloseSearchList?: () => void;
  onSearchItemClick?: (value: SearchItemTypes) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ 
  value,
  isLoading,
  isShowSearchList,
  modifiers,
  isNoIcon,
  searchList = [],
  onChange, 
  onOpenSearchList,
  onCloseSearchList,
  onSearchItemClick,
  ...args
}: SearchInputProps) => {
  const searchRef = useRef<HTMLDivElement>(null);
  useClickOutside(searchRef, () => {
    if(onCloseSearchList) onCloseSearchList();
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(onChange) onChange(e.target.value);
    // if(onOpenSearchList) onOpenSearchList();
  }
  return (
    <div className={mapModifiers('m-searchInput', modifiers, isShowSearchList && 'showedSearchList', isNoIcon && 'noIcon')} ref={searchRef}>
      <input 
        {...args} 
        value={value}
        className="m-searchInput_input"
        type='text' 
        onChange={handleInputChange}
        onFocus={()=> {if(onOpenSearchList) onOpenSearchList()}}
      />
      <div className="m-searchInput_icon">
        <Icon modifiers={['18x18', 'deepKoamaru']}>
          {AiOutlineSearch}
        </Icon>
      </div>
      {isShowSearchList && <div className="m-searchInput_searchList">
        <div className="m-searchInput_searchList_message">
          <Text modifiers={['14x16', 'sonicSilver']}>Tìm thấy {searchList.length} kết quả</Text>
        </div>
        <div className="m-searchInput_searchList_items">
          {isLoading && <Box sx={{width: '50%', margin: 'auto'}}>
            <Loading modifiers='page' />
          </Box>}
          {!isLoading && searchList?.map((searchItem, idx) => 
            <div className="m-searchInput_searchList_item" key={`search-item-${idx}`} onClick={() => {if(onSearchItemClick) onSearchItemClick(searchItem)}}>
              <div className="m-searchInput_searchAvatar">
                <img className="m-searchInput_searchAvatar_img" src={searchItem.avatarSrc ?? ''} />
              </div>
              <div className="m-searchInput_searchContent">
                <div className="m-searchInput_searchContent_title">
                  <Text modifiers={['14x16', '500', 'capitalize', 'black']}>{searchItem.title}</Text>
                </div>
                <div className="m-searchInput_searchContent_description">
                  <Text modifiers={['14x16', 'sonicSilver']}>{searchItem.description}</Text>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>}
    </div>
    
  );
}

SearchInput.defaultProps = {
}

export default SearchInput;
