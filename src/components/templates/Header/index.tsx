import React from 'react';
import SearchInput, { SearchItemTypes } from '~molecules/SearchInput';
import Container from '~organisms/Container';

export interface HeaderProps {
  groupLabel: string;
  searchValue: string;
  searchPlaceholder?: string;
  searchList?: SearchItemTypes[];
  isSearchLoading?: boolean;
  isShowSearchList?: boolean;
  onCloseSearchList?: () => void;
  onOpenSearchList?: () => void;
  onSearchChange?: (value: string) => void;
  onSearchItemClick?: (value: SearchItemTypes) => void;
}

const Header: React.FC<HeaderProps> = ({
  groupLabel,
  isShowSearchList, 
  searchValue, 
  searchList, 
  isSearchLoading,
  searchPlaceholder, 
  onCloseSearchList, 
  onOpenSearchList, 
  onSearchChange,
  onSearchItemClick,
}) => {
  return <div className="t-header">
    <Container>
      <div className="t-header_wrapper">
        <div className="t-header_searchBar">
          <SearchInput
            isLoading={isSearchLoading}
            value={searchValue} onChange={onSearchChange}
            isShowSearchList={isShowSearchList}
            searchList={searchList}
            onCloseSearchList={onCloseSearchList}
            onOpenSearchList={onOpenSearchList}
            modifiers='hasBorder'
            placeholder={searchPlaceholder}
            onSearchItemClick={onSearchItemClick}
          />
        </div>
        <div className="t-header_group">
          Nhóm hiện tại: {groupLabel}
        </div>
      </div>
    </Container>
  </div>
};

Header.defaultProps = {
};

export default Header;

