import * as React from 'react';
import { mapModifiers } from '../../../utils/funcs';

export type IconNames = 
  | 'homeLightSlateGray'
  | 'homeBlueCrayola'
  | 'boxLightSlateGray'
  | 'boxBlueCrayola'
  | 'arrowDownSlateGray'
  | 'logoBlueCrayola'
  | 'searchBlack'
  | 'analyticSlateGray'
  | 'analyticBlueCrayola'
  
type Size = '20x20' | '24x25' | '36x36';

export interface IconProps {
  iconName: IconNames;
  size?: Size;
}

const Icon:React.FC<IconProps> = ({iconName, size='20x20'}) => {
  return (
    <i className={mapModifiers('a-icon', iconName, size)} />
  );
}

export default Icon;