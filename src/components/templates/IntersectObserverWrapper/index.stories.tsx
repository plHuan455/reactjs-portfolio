import { Story, Meta } from '@storybook/react';
import React from 'react';

import IntersectObserverWrapper, { IntersectObserverWrapperProps } from '.';

const meta: Meta = {
  title: 'Components/templates/IntersectObserverWrapper',
  component: IntersectObserverWrapper,
  argTypes: {},
};
export default meta;

export const Normal: Story<IntersectObserverWrapperProps> = ({ ...args }) => {
  return (
    <IntersectObserverWrapper { ...args } />
  )
};

Normal.args = {
}
