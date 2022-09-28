import * as React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <div className="o-container">
      {children}
    </div>
  );
}

export default Container
