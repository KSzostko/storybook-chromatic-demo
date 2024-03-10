import { Card, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useQuery } from '@tanstack/react-query';

export const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

async function getPhotos() {
  try {
    const resp = await fetch(`${apiUrl}?_limit=20`);
    return await resp.json() as Photo[];
  } catch (err) {
    console.error(err);
  }
}

export function PhotosList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['photos'],
    queryFn: getPhotos,
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <p>{error.message}</p>
  }

  if (!data) {
    return null;
  }

  return (
    <Grid container spacing={10} maxWidth={1200} alignItems="stretch">
      {data.map(({ id, title, thumbnailUrl }) => (
        <Grid key={id} xs={4}>
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="150"
              image={thumbnailUrl}
              alt={title}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
