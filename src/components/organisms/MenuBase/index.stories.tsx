import { Story, Meta } from '@storybook/react';
import React from 'react';

import MenuBase, { MenuBaseProps } from '.';

const meta: Meta = {
  title: 'Components/organisms/MenuBase',
  component: MenuBase,
  argTypes: {},
};
export default meta;

export const Normal: Story<MenuBaseProps> = ({ ...args }) => {
  return (
    <MenuBase { ...args } />
  )
};

Normal.args = {
}
