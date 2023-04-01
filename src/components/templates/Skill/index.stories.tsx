import { Story, Meta } from '@storybook/react';
import React from 'react';

import Skill, { SkillProps } from '.';

const meta: Meta = {
  title: 'Components/templates/Skill',
  component: Skill,
  argTypes: {},
};
export default meta;

export const Normal: Story<SkillProps> = ({ ...args }) => {
  return (
    <Skill { ...args } />
  )
};

Normal.args = {
}
