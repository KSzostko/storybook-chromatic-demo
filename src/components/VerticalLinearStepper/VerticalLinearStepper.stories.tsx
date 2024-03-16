import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import { VerticalLinearStepper, stepsContent } from './VerticalLinearStepper.tsx';

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

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    // This is the element in which our component is displayed in the storybook
    const storyCanvas = within(canvasElement);

    const continueButton = () => storyCanvas.getByRole("button", { name: "Continue" });
    const backButton = () => storyCanvas.getByRole("button", { name: "Back" });
    const finishButton = () => storyCanvas.getByRole("button", { name: "Finish" });
    const resetButton = () => storyCanvas.getByRole("button", { name: "Reset" });

    for (const { label } of stepsContent) {
      await expect(storyCanvas.getByText(label)).toBeInTheDocument();
    }

    // Unfortunately in Storybook v7 userEvent is not type-safe, hopefully it will change in the upcoming versions
    /* eslint-disable @typescript-eslint/no-unsafe-call */
    await expect(backButton()).toBeDisabled();
    await expect(storyCanvas.getByText(stepsContent[0].description)).toBeInTheDocument();
    await userEvent.click(continueButton());

    await expect(backButton()).not.toBeDisabled();
    await expect(storyCanvas.getByText(stepsContent[1].description)).toBeInTheDocument();
    await userEvent.click(continueButton());

    await expect(backButton()).not.toBeDisabled();
    await expect(storyCanvas.getByText(stepsContent[2].description)).toBeInTheDocument();
    await userEvent.click(finishButton());

    expect(storyCanvas.getByText("All steps completed - you're finished"));
    await userEvent.click(resetButton());
    /* eslint-enable @typescript-eslint/no-unsafe-call */
  }
};