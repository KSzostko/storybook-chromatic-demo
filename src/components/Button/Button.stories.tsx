import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button.tsx';

const meta: Meta<typeof Button> = {
  title: 'Basics/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: 'contained',
    children: 'Label',
  }
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Label',
  }
};

export const Disabled: Story = {
  args: {
    variant: 'contained',
    disabled: true,
    children: 'Label',
  }
};