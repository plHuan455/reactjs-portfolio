import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mapModifiers } from '../../../utils/funcs';
import Icon, { IconNames } from '../../atoms/Icon';
import Text from '../../atoms/Text';

export interface SlideBarItem {
  href?: string;
  title: string;
  items?: { href: string; title: string }[];
  activeIcon: IconNames;
  defaultIcon: IconNames;
}
export interface SlideBarProps {
  slideBarItems: SlideBarItem[];
  isCompact: boolean;
  onHeaderIconClick?: () => void;
  title: string;
  titleIconName?: IconNames;
}

export interface MeuTabProps extends SlideBarItem {
  isOpen: boolean;
  onClick?: () => void;
}

const MenuTab: React.FC<MeuTabProps> = ({ 
  isOpen, 
  activeIcon, 
  defaultIcon, 
  href, 
  title, 
  items, 
  onClick }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = React.useState<boolean>(false);
  const location = useLocation();

  const handleLabelClick = (href?: string) => {
    if (href) navigate(href);
  }
  return (
    <div className="o-slideBar_tab">
      <div
        className={mapModifiers(
          "o-slideBar_tab_label",
          location.pathname === href && 'active',
          isOpen && 'tabActive'
        )}
        onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
        onClick={() => { 
          if(!items) handleLabelClick(href);
          if (items && onClick) onClick();
        }}
      >
        <Icon iconName={isHover || location.pathname === href ? activeIcon : defaultIcon} size='20x20' />
        <Text modifiers={['16x20', '500', 'charcoal']} type="h2">{title}</Text>
        {Boolean(items?.length) && <div className={mapModifiers('o-slideBar_tab_dropdownIcon', isOpen && 'open')}>
          <Icon iconName='arrowDownSlateGray' size='20x20' />
        </div>}
      </div>
      {items && isOpen &&
        <ul className="o-slideBar_tab_items">
          {items.map((value, idx) => {
            return <li 
            className={mapModifiers("o-slideBar_tab_item", value.href === location.pathname)} 
            key={`slide-tab-item-${idx}`} 
            onClick={()=> handleLabelClick(value.href)}>
              <Text modifiers={['16x20', '400', 'charcoal']} type="span">{value?.title}</Text>
            </li>
          })}
        </ul>}
    </div>);
}

export default function SlideBar({ title, titleIconName, slideBarItems, isCompact, onHeaderIconClick }: SlideBarProps) {
  const [openTabIndex, setOpenTabIndex] = React.useState<number | undefined>(undefined);

  return (
    <div className={mapModifiers("o-slideBar", isCompact && 'compact')}>
      <div className="o-slideBar_title" onClick={onHeaderIconClick}>
        {titleIconName && <div className="o-slideBar_title_icon">
          <Icon iconName={titleIconName} size='36x36' />
        </div>}
        <div className="o-slideBar_title_text">
          <Text modifiers={['24x24', 'charcoal', '600', 'nowrap']} type='h2'>
            {title}
          </Text>
        </div>

      </div>
      <ul className="o-slideBar_list">
        {slideBarItems.map((item, idx) =>
        (<li className="o-slideBar_item" key={`slideBar-item-${idx}`}>
          <MenuTab
            isOpen={idx === openTabIndex} {...item}
            onClick={() => { setOpenTabIndex(idx == openTabIndex ? undefined : idx) }} />
        </li>
        ))}
      </ul>

    </div>
  );
}