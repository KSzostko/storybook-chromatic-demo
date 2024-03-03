import type { Meta, StoryObj } from '@storybook/react';
import { PhotosList } from './PhotosList.tsx';

const meta = {
  title: 'Part 3 - Addons/MSW Addon/PhotosList',
  component: PhotosList,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PhotosList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};