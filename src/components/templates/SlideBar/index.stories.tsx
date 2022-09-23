import { Story, Meta } from '@storybook/react';
import React, { useMemo, useState } from 'react';
import SlideBar, { SlideBarProps } from '.';

export default {
  title: 'Components/templates/SlideBar',
  component: SlideBar,
  argTypes: {},
} as Meta;

export const Normal: Story = ({ ...args }: SlideBarProps) => {
  console.log(args.logoSrc);
  return (
    <div>
      <SlideBar/>
    </div>
  );
};

Normal.args = {
}