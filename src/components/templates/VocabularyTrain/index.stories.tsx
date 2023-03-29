import { Story, Meta } from '@storybook/react';
import React from 'react';

import VocabularyTrain, { VocabularyTrainProps } from '.';

const meta: Meta = {
  title: 'Components/templates/VocabularyTrain',
  component: VocabularyTrain,
  argTypes: {},
};
export default meta;

export const Normal: Story<VocabularyTrainProps> = ({ ...args }) => {
  return (
    <VocabularyTrain { ...args } />
  )
};

Normal.args = {
}
