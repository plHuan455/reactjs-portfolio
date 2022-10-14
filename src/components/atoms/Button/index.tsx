import * as React from 'react';
import { clearScreenDown } from 'readline';
import { mapModifiers } from '../../../utils/funcs';

type ButtonTypes = 'noBg' | 'outline';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  modifiers?: (GeneralTextStyle | ButtonTypes)[];
}

const Button: React.FC<ButtonProps> = ({modifiers, disabled, type="button", children, className, ...args}) => {
  console.log(disabled);
  return (
    <button {...args} className={mapModifiers(className ? `${className} a-button`: 'a-button', modifiers, disabled && 'disabled')} type={type} disabled={disabled} >
      {children}
    </button>
  );
}

export default Button