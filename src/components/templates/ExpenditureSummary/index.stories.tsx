import { Story, Meta } from '@storybook/react';
import React from 'react';

import ExpenditureSummary, { ExpenditureSummaryProps } from '.';

const meta: Meta = {
  title: 'Components/templates/ExpenditureSummary',
  component: ExpenditureSummary,
  argTypes: {},
};
export default meta;

export const Normal: Story<ExpenditureSummaryProps> = ({ ...args }) => {
  return (
    <ExpenditureSummary { ...args } />
  )
};

Normal.args = {
}
