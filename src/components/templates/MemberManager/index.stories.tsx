import { Story, Meta } from '@storybook/react';
import React from 'react';

import MemberManager, { MemberManagerProps } from '.';

const meta: Meta = {
  title: 'Components/templates/MemberManager',
  component: MemberManager,
  argTypes: {},
};
export default meta;

export const Normal: Story<MemberManagerProps> = ({ ...args }) => {
  return <MemberManager { ...args } />
};

Normal.args = {
}
