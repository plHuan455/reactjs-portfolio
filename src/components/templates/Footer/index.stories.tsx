import { Story, Meta } from '@storybook/react';
import React from 'react';

import Footer, { FooterProps } from '.';

const meta: Meta = {
  title: 'Components/templates/Footer',
  component: Footer,
  argTypes: {},
};
export default meta;

export const Normal: Story<FooterProps> = ({ ...args }) => {
  return (
    <Footer { ...args } />
  )
};

Normal.args = {
}
