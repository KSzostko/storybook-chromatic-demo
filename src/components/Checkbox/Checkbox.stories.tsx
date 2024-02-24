import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox.tsx';

const meta: Meta<typeof Checkbox> = {
  title: 'Autodocs and MDX/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  /**
   * This creates auto-generated documentation for the component stories
   * Autodocs template can also be customized, more details can be found here: https://storybook.js.org/docs/writing-docs/autodocs
   */
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
  },
};

export const NotChecked: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const CheckedDisabled: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const NotCheckedDisabled: Story = {
  args: {
    disabled: true,
    checked: false,
  },
};
