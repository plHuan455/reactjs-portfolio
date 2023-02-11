import { Story, Meta } from '@storybook/react';
import React from 'react';

import PendingDetail, { PendingDetailProps } from '.';

const meta: Meta = {
  title: 'Components/templates/PendingDetail',
  component: PendingDetail,
  argTypes: {},
};
export default meta;

export const Normal: Story<PendingDetailProps> = ({ ...args }) => {
  return (
    <PendingDetail { ...args } />
  )
};

Normal.args = {
}
