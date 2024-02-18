import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button.tsx';

const meta: Meta<typeof Button> = {
  title: 'Basics/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

// We specify component props inside 'args' field
// This example is equivalent to <Button variant="contained">Label</Button>
export const Contained: Story = {
  args: {
    variant: 'contained',
    children: 'Label',
  },
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