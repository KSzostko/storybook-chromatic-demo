import type { Meta, StoryObj } from '@storybook/react';
import { VerticalLinearStepper } from './VerticalLInearStepper.tsx';

const meta = {
  title: 'Part 1 - Basics/VerticalLinearStepper',
  component: VerticalLinearStepper,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'gray', value: 'rgba(31, 38, 46, 0.1)' }
      ]
    }
  },
} satisfies Meta<typeof VerticalLinearStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};