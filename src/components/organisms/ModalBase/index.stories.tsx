import { Story, Meta } from '@storybook/react';
import React from 'react';

import ModalBase, { ModalBaseProps } from '.';

const meta: Meta = {
  title: 'Components/organisms/ModalBase',
  component: ModalBase,
  argTypes: {},
};
export default meta;

export const Normal: Story<ModalBaseProps> = ({ children, ...args }) => {
  return (
    <ModalBase {...args}>
      {children}
    </ModalBase>
  )
};

Normal.args = {
  isOpen: true
}
