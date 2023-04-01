import { Story, Meta } from '@storybook/react';
import React from 'react';

import Banner, { BannerProps } from '.';

const meta: Meta = {
  title: 'Components/templates/Banner',
  component: Banner,
  argTypes: {},
};
export default meta;

export const Normal: Story<BannerProps> = ({ ...args }) => {
  return (
    <Banner { ...args } />
  )
};

Normal.args = {
}
