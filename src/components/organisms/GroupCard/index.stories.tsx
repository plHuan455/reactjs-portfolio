import { Story, Meta } from '@storybook/react';
import React from 'react';

import GroupCard, { GroupCardProps } from '.';

const meta: Meta = {
  title: 'Components/organisms/GroupCard',
  component: GroupCard,
  argTypes: {},
};
export default meta;

export const Normal: Story<GroupCardProps> = ({ ...args }) => {
  return <div style={{width: '300px', height: '350px'}}>
    <GroupCard { ...args } />
  </div>
};

Normal.args = {
  avatarSrc: 'https://picsum.photos/300/200',
  memberList: [{
    username: 'plhuan'
  }, 
  {
    username: 'ttdthuong'
  },
  {
    username: 'test'
  }
]
}
