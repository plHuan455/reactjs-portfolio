import { Story, Meta } from '@storybook/react';
import React from 'react';

import DropdownControl, { DropdownControlProps } from '.';

const meta: Meta = {
  title: 'Components/molecules/DropdownControl',
  component: DropdownControl,
  argTypes: {},
};
export default meta;

export const Normal: Story<DropdownControlProps> = ({ ...args }) => {
  return <DropdownControl { ...args } />
};

Normal.args = {
}
