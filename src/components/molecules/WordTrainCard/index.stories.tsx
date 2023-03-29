import { Story, Meta } from '@storybook/react';
import React from 'react';

import WordTrainCard, { WordTrainCardProps } from '.';

const meta: Meta = {
  title: 'Components/molecules/WordTrainCard',
  component: WordTrainCard,
  argTypes: {},
};
export default meta;

export const Normal: Story<WordTrainCardProps> = ({ ...args }) => {
  return (
    <WordTrainCard { ...args } />
  )
};

Normal.args = {
}
