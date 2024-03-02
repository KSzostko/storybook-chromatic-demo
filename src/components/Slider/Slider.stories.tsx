import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider.tsx';

const meta = {
  title: 'Part 3 - Addons/Action Addon/Slider',
  component: Slider,
  // here you can define on which event you want to display log in the console
  argTypes: {
    onChange: { action: 'value changed' },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    min: 0,
    max: 20,
    step: 1,
    defaultValue: 6,
  },
};

export const Disabled: Story = {
  args: {
    min: 0,
    max: 20,
    step: 1,
    defaultValue: 6,
    disabled: true,
  },
};
