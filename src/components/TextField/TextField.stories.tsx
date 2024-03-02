import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField.tsx';

const meta = {
  title: 'Part 3 - Addons/Controls Addon/TextField',
  component: TextField,
  // We can use controls addon to dynamically change prop values on each story
  argTypes: {
    variant: {
      options: ['outlined', 'filled', 'standard'],
      control: { type: 'radio' },
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    helperText: {
      control: 'text',
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Name',
    variant: 'standard',
  },
};
