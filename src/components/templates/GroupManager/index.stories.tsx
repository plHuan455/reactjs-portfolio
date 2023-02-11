import { Story, Meta } from '@storybook/react';
import React from 'react';

import GroupManager, { GroupManagerProps } from '.';

const meta: Meta = {
  title: 'Components/templates/GroupManager',
  component: GroupManager,
  argTypes: {},
};
export default meta;

export const Normal: Story<GroupManagerProps> = ({ ...args }) => {
  return <GroupManager { ...args } />
};

Normal.args = {
  groupList: [
    {
      id: "1",
      slug: '123',
      avatarSrc: 'test',
      name: 'test',
      description: 'test',
      memberList: [{username: 'plhuan'}],
    }
  ]
}
