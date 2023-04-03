import { Story, Meta } from '@storybook/react';
import React from 'react';

import LightBoxBase, { LightBoxBaseProps } from '.';

const meta: Meta = {
  title: 'Components/organisms/LightBoxBase',
  component: LightBoxBase,
  argTypes: {},
};
export default meta;

export const Normal: Story<LightBoxBaseProps> = ({ ...args }) => {
  return (
    <LightBoxBase { ...args } />
  )
};

Normal.args = {
}
