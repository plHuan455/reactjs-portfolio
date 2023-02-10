import { Story, Meta } from '@storybook/react';
import React from 'react';

import VocabularyList, { VocabularyListProps } from '.';

const meta: Meta = {
  title: 'Components/templates/VocabularyList',
  component: VocabularyList,
  argTypes: {},
};
export default meta;

export const Normal: Story<VocabularyListProps> = ({ ...args }) => {
  return <VocabularyList { ...args } />
};

Normal.args = {
}
