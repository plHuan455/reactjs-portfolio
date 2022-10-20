import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Icon, { IconNames } from "../../atoms/Icon"
import Text from "../../atoms/Text"
import { useRef, useState } from 'react';
import { IconType } from "react-icons";
import { mapModifiers } from "../../../utils/funcs";
import { RiArrowDownSLine } from 'react-icons/ri';
import useClickOutside from "../../../hooks/useClickOutside";
import useMatchMedia from "../../../hooks/useMatchMedia";

export interface MenuType {
  label: string;
  href?: string;
  menuIcon: IconType;
  subItems?: { label: string; href?: string; }[];
}
interface SlideBarProps {
  menuItems: MenuType[];
  title?: string;
  titleIconName: IconNames;
}

const SlideBar: React.FC<SlideBarProps> = ({ menuItems, title, titleIconName }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isMobile, isTablet } = useMatchMedia()

  const dropdownListRef = useRef<HTMLUListElement | null>(null);

  const [isCompact, setIsCompact] = useState<boolean>(isMobile || isTablet);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | undefined>();

  
  useClickOutside(dropdownListRef, () => {
    if(isCompact) {
      setActiveDropdownIndex(undefined);
    }
  })

  const handleMenuItemClick = (menuIdx: number, item: MenuType) => {
    if (!item.subItems && item.href) navigate(item.href);
    if (item.subItems) {
      setActiveDropdownIndex(activeDropdownIndex === menuIdx ? undefined : menuIdx);
    }
    else {
      setActiveDropdownIndex(undefined);
    }
  }

  return (
    <div className={mapModifiers("o-slideBar", isCompact && 'compact')}>
      <div className="o-slideBar_title" onClick={() => setIsCompact(preState => !preState)}>
        <div className="o-slideBar_title_icon">
          <Icon iconName={titleIconName} modifiers={['32x32']} />
        </div>
        <div className="o-slideBar_title_text">
          <Text modifiers={['24x24', '600', 'charcoal', 'nowrap']} type='h2'>{title}</Text>
        </div>
      </div>
      <ul className="o-slideBar_menuList" ref={dropdownListRef}>
        {menuItems.map((item, idx) => {
          const isActive: boolean = location.pathname === item.href;
          const isDropdownActive = item?.subItems?.some(value => value.href === location.pathname);
          return (
            <li className='o-slideBar_menuItem o-slideBar_menuItem-dropdown' key={`slideBar-menuItem-${idx}`}>
              <div className="o-slideBar_menuItem_wrapper">
                <div
                  className={mapModifiers(
                    "o-slideBar_menuItem_head",
                    isActive && 'active',
                    isDropdownActive && 'dropdownActive'
                  )}
                  onClick={() => handleMenuItemClick(idx, item)}
                >
                  <div className={mapModifiers("o-slideBar_menuItem_icon", activeDropdownIndex === idx && 'openDropdown')}>
                    <Icon modifiers={['20x20', 'independence']}>{item.menuIcon}</Icon>
                  </div>
                  <div className="o-slideBar_menuItem_text">
                    <Text modifiers={['16x20', '400', 'independence']}>{item.label}</Text>
                  </div>
                  {item.subItems && <div className={mapModifiers("o-slideBar_menuItem_dropdownIcon", idx === activeDropdownIndex && 'openDropdown')}>
                    <Icon modifiers={['independence', '16x16']}>{RiArrowDownSLine}</Icon>
                  </div>}
                </div>
              </div>
              
              {idx === activeDropdownIndex && item.subItems && item?.subItems.length > 0 &&
                <ul className="o-slideBar_menuItem_dropdown">
                  {item.subItems.map((subItem, subIdx) => {
                    return (
                    <li
                      className={mapModifiers("o-slideBar_menuItem_subItem", subItem.href === location.pathname && 'active')}
                      key={`slideBar-menuDropdown-item-${subIdx}`}
                      onClick={() => {if(subItem.href) navigate(subItem.href); if(isCompact) setActiveDropdownIndex(undefined)}}
                    >
                      <div className="o-slideBar_menuItem_subText">
                        <Text modifiers={['16x20', '400', 'charcoal']}>{subItem.label}</Text>
                      </div>
                    </li>)
                  })}
                </ul>}
            </li>)
        })}
      </ul>
    </div>
  )
}

export default SlideBar