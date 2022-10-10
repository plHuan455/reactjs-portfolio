import * as React from 'react';
import { mapModifiers } from '../../../utils/funcs';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  
}

const Button: React.FC<ButtonProps> = ({type="button", children, className, ...args}) => {
  return (
    <button {...args} className={mapModifiers(className ? `${className} a-button`: 'a-button', )} type="button">
      {children}
    </button>
  );
}

export default Button