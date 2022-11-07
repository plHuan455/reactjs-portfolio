import { Story, Meta } from '@storybook/react';
import React from 'react';

import Header, { HeaderProps } from '.';

const meta: Meta = {
  title: 'Components/templates/Header',
  component: Header,
  argTypes: {},
};
export default meta;

export const Normal: Story<HeaderProps> = ({ ...args }) => {
  return <Header { ...args } />
};

Normal.args = {
}
