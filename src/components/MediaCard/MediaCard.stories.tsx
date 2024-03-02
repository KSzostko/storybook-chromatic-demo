import type { Meta, StoryObj } from '@storybook/react';
import { MediaCard } from './MediaCard.tsx';

const meta = {
  title: 'Part 3 - Addons/Accessibility Addon/MediaCard',
  component: MediaCard,
} satisfies Meta<typeof MediaCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};