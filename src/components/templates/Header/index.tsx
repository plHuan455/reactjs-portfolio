import React from 'react';
import SearchInput, { SearchItemTypes } from '~molecules/SearchInput';
import Container from '~organisms/Container';

export interface HeaderProps {
  searchValue: string;
  searchPlaceholder?: string;
  searchList?: SearchItemTypes[];
  isShowSearchList?: boolean;
  onCloseSearchList?: () => void;
  onOpenSearchList?: () => void;
  onSearchChange?: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  isShowSearchList, 
  searchValue, 
  searchList, 
  searchPlaceholder, 
  onCloseSearchList, 
  onOpenSearchList, 
  onSearchChange 
}) => {
  return <div className="t-header">
    <Container>
      <div className="t-header_wrapper">
        <div className="t-header_searchBar">
          <SearchInput
            value={searchValue} onChange={onSearchChange}
            isShowSearchList={isShowSearchList}
            searchList={searchList}
            onCloseSearchList={onCloseSearchList}
            onOpenSearchList={onOpenSearchList}
            modifiers='hasBorder'
            placeholder={searchPlaceholder}
          />
        </div>
        <div className="t-header_group">
          Nhóm hiện tại: test
        </div>
      </div>
    </Container>
  </div>
};

Header.defaultProps = {
};

export default Header;

