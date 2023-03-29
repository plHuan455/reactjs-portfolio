import { Story, Meta } from '@storybook/react';
import React from 'react';

import VocabularyCreateEdit, { VocabularyCreateEditProps } from '.';

const meta: Meta = {
  title: 'Components/templates/VocabularyCreateEdit',
  component: VocabularyCreateEdit,
  argTypes: {},
};
export default meta;

export const Normal: Story<VocabularyCreateEditProps> = ({ ...args }) => {
  return <VocabularyCreateEdit { ...args } />
};

Normal.args = {
}
