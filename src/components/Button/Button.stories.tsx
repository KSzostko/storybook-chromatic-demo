import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button.tsx';

const meta: Meta<typeof Button> = {
  title: 'Part 1 - Basics/Button',
  component: Button,
  /**
   * We can specify more details on how do we want to display our components
   * for example below options will center component
   */
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * We specify component props inside 'args' field
 * This example is equivalent to <Button variant="contained">Label</Button>
 */
export const Contained: Story = {
  args: {
    variant: 'contained',
    children: 'Label',
    color: "error"
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Label',
  }
};

export const ContainedDisabled: Story = {
  args: {
    variant: 'contained',
    disabled: true,
    children: 'Label',
  }
};

/**
 * It is also possible to create story with the use of 'render' field
 */
export const OutlinedDisabled: Story = {
  render: () => <Button variant="outlined" disabled>Label</Button>,
};
