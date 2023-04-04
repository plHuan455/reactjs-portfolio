import { Story, Meta } from '@storybook/react';
import React from 'react';

import ContactCard, { ContactCardProps } from '.';

const meta: Meta = {
  title: 'Components/organisms/ContactCard',
  component: ContactCard,
  argTypes: {},
};
export default meta;

export const Normal: Story<ContactCardProps> = ({ ...args }) => {
  return (
    <ContactCard { ...args } />
  )
};

Normal.args = {
}
