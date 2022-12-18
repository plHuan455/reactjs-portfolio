import * as React from 'react';
import Loading from '~atoms/Loading';
import { mapModifiers } from '../../../utils/funcs';

type ButtonTypes = 'noBg' | 'outline';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  modifiers?: (GeneralTextStyle | ButtonTypes)[];
  variant?: 'auth' | 'group' | 'pendingManager';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ isLoading, variant, modifiers, disabled, type = "button", children, ...args }) => {
  return (
    <button
      {...args}
      className={mapModifiers('a-button', modifiers, variant, disabled && 'disabled')}
      type={type}
      disabled={disabled} >
      {children}
      {isLoading && <div className="a-button_loading"><Loading size='28x28' modifiers='spin'/></div>} 
    </button>
  );
}

export default Button