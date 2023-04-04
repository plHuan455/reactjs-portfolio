import * as React from 'react';
import { mapModifiers } from '../../../utils/funcs';
import { Container } from '@mui/material';
import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";

type Spacing = '0' | '12' | '24' | '32';

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
  sx?: SxProps<Theme>;
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

const ContainerBase: React.FC<ContainerProps> = ({ sx, children }: ContainerProps) => {
  return (
    <Container className="o-container" sx={{
      ...sx,
      maxWidth: {
        xs: '95%',
        sm: '90%',
        lg: '1180px'
      }
    }}>
      {children}
    </Container>
  );
}

export default ContainerBase
