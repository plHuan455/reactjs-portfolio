import { Story, Meta } from '@storybook/react';
import React from 'react';

import SkillItem, { SkillItemProps } from '.';

const meta: Meta = {
  title: 'Components/organisms/SkillItem',
  component: SkillItem,
  argTypes: {},
};
export default meta;

export const Normal: Story<SkillItemProps> = ({ ...args }) => {
  return (
    <SkillItem { ...args } />
  )
};

Normal.args = {
}
