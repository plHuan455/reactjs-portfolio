import { Story, Meta } from '@storybook/react';
import React from 'react';

import SkillList, { SkillListProps } from '.';

const meta: Meta = {
  title: 'Components/organisms/SkillList',
  component: SkillList,
  argTypes: {},
};
export default meta;

export const Normal: Story<SkillListProps> = ({ ...args }) => {
  return (
    <SkillList { ...args } />
  )
};

Normal.args = {
}
