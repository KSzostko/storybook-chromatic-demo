import { rest } from 'msw';
import { apiUrl, Photo } from '../components/PhotosLIst/PhotosList.tsx';

export const photoListMock: Photo[] = [
  {
    albumId: 1,
    id: 25,
    title: "Mock title 1",
    url: "https://via.placeholder.com/600/5e3a73",
    thumbnailUrl: "https://via.placeholder.com/150/5e3a73"
  },
  {
    albumId: 1,
    id: 26,
    title: "Mock title 2",
    url: "https://via.placeholder.com/600/474645",
    thumbnailUrl: "https://via.placeholder.com/150/474645"
  },
  {
    albumId: 1,
    id: 27,
    title: "Mock title 3",
    url: "https://via.placeholder.com/600/c984bf",
    thumbnailUrl: "https://via.placeholder.com/150/c984bf"
  },
  {
    albumId: 1,
    id: 28,
    title: "Mock title 4",
    url: "https://via.placeholder.com/600/392537",
    thumbnailUrl: "https://via.placeholder.com/150/392537"
  },
  {
    albumId: 1,
    id: 29,
    title: "Mock title 5",
    url: "https://via.placeholder.com/600/602b9e",
    thumbnailUrl: "https://via.placeholder.com/150/602b9e"
  },
  {
    albumId: 1,
    id: 30,
    title: "Mock title 6",
    url: "https://via.placeholder.com/600/372c93",
    thumbnailUrl: "https://via.placeholder.com/150/372c93"
  },
];

export const photoListHandler = () => rest.get(apiUrl, (_, res, ctx) => {
  return res(ctx.json(photoListMock));
});
