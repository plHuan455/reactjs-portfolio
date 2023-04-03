import { Story, Meta } from '@storybook/react';
import React from 'react';

import AboutMe, { AboutMeProps } from '.';

const meta: Meta = {
  title: 'Components/templates/AboutMe',
  component: AboutMe,
  argTypes: {},
};
export default meta;

export const Normal: Story<AboutMeProps> = ({ ...args }) => {
  return (
    <AboutMe { ...args } />
  )
};

Normal.args = {
}
