import * as React from 'react';
import { mapModifiers } from '../../../utils/funcs';

type Spacing = '0' | '24' | '32';

export interface CusRowProps {
  colGap?: Spacing;
  rowGap?: string;
  children: React.ReactNode;
}

export interface CusColProps {
  md?: string;
  xs?: string;
  lg?: string;
  sm?: string;
  colSpan?: string;
  children: React.ReactNode;
}

export interface ContainerProps {
  children: React.ReactNode;
}

export const Row: React.FC<CusRowProps> = ( {colGap = '0', rowGap = '0', children }) => {
  return <div className={mapModifiers('o-row', colGap && `cg-${colGap}`, rowGap && `rg-${rowGap}`)}>
    {children}
  </div>
}

export const Col: React.FC<CusColProps> = ({ sm, md, lg, xs, colSpan, children }) => {
  return <div className={mapModifiers('o-col', colSpan && colSpan, xs && `xs-${xs}`, lg && `lg-${lg}`, md && `md-${md}`, sm && `sm-${sm}`)}>
    {children}
  </div>
}

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <div className="o-container">
      {children}
    </div>
  );
}

export default Container
