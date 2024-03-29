import type { Meta, StoryObj } from '@storybook/react';
import { PhotosList } from './PhotosList.tsx';
import { photoListHandler } from '../../mocks/photoListHandler.ts';

const meta = {
  title: 'Part 3 - Addons/MSW Addon/PhotosList',
  component: PhotosList,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PhotosList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [photoListHandler()],
    },
  },
};