import React from 'react';
import Button, { ButtonProps } from '../components/Button';

export default {
  title: 'component/Button',
  component: Button,
  argTypes: {
    width: {
      defaultValue: 96,
      control: { type: 'range', min: 8, max: 500, step: 2 },
    },
    height: {
      defaultValue: 32,
      control: { type: 'range', min: 8, max: 500, step: 2 },
    },
    children: {
      type: 'text',
      defaultValue: 'Click!',
    },
  },
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
