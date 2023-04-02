import { Story, Meta } from '@storybook/react';
import React from 'react';

import CaroselBase, { CaroselBaseProps } from '.';

const meta: Meta = {
  title: 'Components/organisms/CaroselBase',
  component: CaroselBase,
  argTypes: {},
};
export default meta;

export const Normal: Story<CaroselBaseProps> = ({ ...args }) => {
  return (
    <CaroselBase { ...args } />
  )
};

Normal.args = {
}
