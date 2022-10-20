import * as React from 'react';
import { mapModifiers } from '../../../utils/funcs';
import { IconType } from 'react-icons';

export type IconNames = 
  | 'homeLightSlateGray'
  | 'homeBlueCrayola'
  | 'boxLightSlateGray'
  | 'boxBlueCrayola'
  | 'arrowDownSlateGray'
  | 'arrowDownBlueCrayola'
  | 'logoBlueCrayola'
  | 'searchBlack'
  | 'analyticSlateGray'
  | 'analyticBlueCrayola'
  | 'closeEerieBlack'
  
export interface IconProps {
  iconName?: IconNames;
  modifiers?: (BoxSize | ColorStyle)[];
  children?: IconType
}

const Icon:React.FC<IconProps> = ({iconName, modifiers =['20x20'], children}) => {
  const IconChildren = iconName ? 'i' : children;
  if(IconChildren)
    return <IconChildren className={mapModifiers('a-icon', iconName && iconName, modifiers)}/>
    
  return null;
}

export default Icon;