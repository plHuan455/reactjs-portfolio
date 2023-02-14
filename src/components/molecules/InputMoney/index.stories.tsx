import { Story, Meta } from '@storybook/react';
import React from 'react';

import InputMoney, { InputMoneyProps } from '.';

const meta: Meta = {
  title: 'Components/molecules/InputMoney',
  component: InputMoney,
  argTypes: {},
};
export default meta;

export const Normal: Story<InputMoneyProps> = ({ ...args }) => {
  return (
    <InputMoney { ...args } />
  )
};

Normal.args = {
}
