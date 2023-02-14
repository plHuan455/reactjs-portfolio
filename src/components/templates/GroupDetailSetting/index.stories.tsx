import { Story, Meta } from '@storybook/react';
import React from 'react';

import GroupDetailSetting, { GroupDetailSettingProps } from '.';

const meta: Meta = {
  title: 'Components/templates/GroupDetailSetting',
  component: GroupDetailSetting,
  argTypes: {},
};
export default meta;

export const Normal: Story<GroupDetailSettingProps> = ({ ...args }) => {
  return (
    <GroupDetailSetting { ...args } />
  )
};

Normal.args = {
}
