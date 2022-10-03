import * as React from 'react';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  
}

const Button: React.FC<ButtonProps> = ({children, ...args}) => {
  return (
    <button {...args} className="a-button">
      {children}
    </button>
  );
}

export default Button