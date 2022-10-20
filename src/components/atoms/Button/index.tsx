import * as React from 'react';
import { clearScreenDown } from 'readline';
import { mapModifiers } from '../../../utils/funcs';

type ButtonTypes = 'noBg' | 'outline';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  modifiers?: (GeneralTextStyle | ButtonTypes)[];
  variant?: 'auth'
}

const Button: React.FC<ButtonProps> = ({ variant, modifiers, disabled, type = "button", children, ...args }) => {
  return (
    <button
      {...args}
      className={mapModifiers('a-button', modifiers, variant, disabled && 'disabled')}
      type={type}
      disabled={disabled} >
      {children}
    </button>
  );
}

export default Button