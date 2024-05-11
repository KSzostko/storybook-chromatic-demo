import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material';
import iguanaImg from '../../assets/iguana.jpg';

/**
 * Accessibility errors are made here on purpose, just to illustrate how storybook a11y addon works :)
 */
export function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 450 }}
        image={iguanaImg}
        // title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" tabIndex={1} role="listitem">Share</Button>
        <Button size="small" variant="contained">Learn More</Button>
      </CardActions>
    </Card>
  );
}
