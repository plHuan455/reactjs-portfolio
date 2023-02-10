import { Story, Meta } from '@storybook/react';
import React from 'react';

import VocabularyCard, { VocabularyCardProps } from '.';

const meta: Meta = {
  title: 'Components/organisms/VocabularyCard',
  component: VocabularyCard,
  argTypes: {},
};
export default meta;

export const Normal: Story<VocabularyCardProps> = ({ ...args }) => {
  return <VocabularyCard { ...args } />
};

Normal.args = {
}
