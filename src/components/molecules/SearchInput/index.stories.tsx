import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import SearchInput from '.';

export default {
  title: 'Components/Molecules/SearchInput',
  component: SearchInput,
  argTypes: {},
} as Meta;

export const normal: Story = () => {
  const [value, setValue] = useState<string>('');
  return <SearchInput
    value={value}  
  />
}