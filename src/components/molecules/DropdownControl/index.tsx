import React, { useRef, useState } from 'react';
import useClickOutside from '~hooks/useClickOutside';
import { mapModifiers } from '../../../utils/funcs';

export interface DropdownControlOptionTypes {
  label: string;
  value: string;
}
export interface DropdownControlProps {
  dropdownList?: DropdownControlOptionTypes[];
  children: React.ReactNode;
  isDisabled?: boolean;
  onItemClick?: (value: string) => void;
}

const DropdownControl: React.FC<DropdownControlProps> = ({ isDisabled, dropdownList = [], children, onItemClick }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState<boolean>(false);

  useClickOutside(dropdownRef, () => setIsShow(false));

  return <div className={mapModifiers("m-dropdownControl", isDisabled && 'disabled')} ref={dropdownRef}>
    <div className="m-dropdownControl_show" onClick={() => setIsShow(preState => !preState)}>
      {children}
    </div>
    {!isDisabled && isShow && <div className="m-dropdownControl_dropdownList">
      {dropdownList.map((value, idx) => (
        <div
          className="m-dropdownControl_dropdownList_item"
          key={`dropdownControl-item-${idx}`}
          onClick={() => { if (onItemClick) onItemClick(value.value) }}
        >
          {value.label}
        </div>
      ))}
    </div>}
  </div>
};

DropdownControl.defaultProps = {
  children: undefined,
};

export default DropdownControl;

