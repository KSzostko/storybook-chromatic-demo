import type { Meta, StoryObj } from '@storybook/react';
import { allModes } from '../../../.storybook/modes.ts';
import { Grid } from './Grid.tsx';
import { Item } from '../Item/Item.tsx';

/**
 * In this example, Grid component is the type of the component that just allows to display elements inside it in the form of the grid.
 * It would be nice to have documentation with some guidelines on how to use this concrete grid system.
 * Generating just Autodocs might not be enough in this case - we might need some details for example regarding the number of columns that this grid system uses.
 *
 * This is where MDX can be useful - it allows you to write standard Markdown documentation and additionally embed components inside of it.
 */
const meta: Meta<typeof Grid> = {
  title: 'Part 2 - Autodocs and MDX/Grid',
  component: Grid,
  parameters: {
    // custom docs config, just to show code by default for the canvas component
    docs: {
      canvas: {
        sourceState: 'shown'
      },
    },
    chromatic: {
      modes: {
        desktop: allModes.desktop,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const BasicGrid: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  ),
};

export const GridWithMultipleBreakpoints: Story = {
  parameters: {
    chromatic: {
      modes: {
        largeMobile: allModes.largeMobile,
      },
    },
  },
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={2} md={8}>
        <Item>xs=6 md=8</Item>
      </Grid>
      <Grid item xs={10} md={4}>
        <Item>xs=6 md=4</Item>
      </Grid>
      <Grid item xs={10} md={4}>
        <Item>xs=6 md=4</Item>
      </Grid>
      <Grid item xs={2} md={8}>
        <Item>xs=6 md=8</Item>
      </Grid>
    </Grid>
  ),
}
