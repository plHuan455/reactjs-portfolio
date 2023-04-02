import { Story, Meta } from '@storybook/react';
import React from 'react';

import ProjectDetail, { ProjectDetailProps } from '.';

const meta: Meta = {
  title: 'Components/organisms/ProjectDetail',
  component: ProjectDetail,
  argTypes: {},
};
export default meta;

export const Normal: Story<ProjectDetailProps> = ({ ...args }) => {
  return (
    <ProjectDetail { ...args } />
  )
};

Normal.args = {
}
