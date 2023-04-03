import { Story, Meta } from '@storybook/react';
import React from 'react';

import SectionTitle, { SectionTitleProps } from '.';

const meta: Meta = {
  title: 'Components/molecules/SectionTitle',
  component: SectionTitle,
  argTypes: {},
};
export default meta;

export const Normal: Story<SectionTitleProps> = ({ ...args }) => {
  return (
    <SectionTitle { ...args } />
  )
};

Normal.args = {
}
