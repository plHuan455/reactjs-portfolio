import { Story, Meta } from '@storybook/react';
import React from 'react';

import Project, { ProjectProps } from '.';

const meta: Meta = {
  title: 'Components/templates/Project',
  component: Project,
  argTypes: {},
};
export default meta;

export const Normal: Story<ProjectProps> = ({ ...args }) => {
  return (
    <Project { ...args } />
  )
};

Normal.args = {
}
