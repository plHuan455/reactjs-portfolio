import { Story, Meta } from '@storybook/react';
import React from 'react';

import AutoCompleteBase, { AutoCompleteBaseProps } from '.';

const meta: Meta = {
  title: 'Components/molecules/AutoCompleteBase',
  component: AutoCompleteBase,
  argTypes: {},
};
export default meta;

export const Normal: Story<AutoCompleteBaseProps> = ({ ...args }) => {
  return (
    <AutoCompleteBase { ...args } />
  )
};

Normal.args = {
}
