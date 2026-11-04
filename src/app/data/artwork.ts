export interface Artwork {
  id: number;
  title: string;
  medium: string;
  imageUrl: string;
}

export const ARTWORKS: Artwork[] = [
  {
    id: 1,
    title: 'Portrait during the fall',
    medium: 'Painting',
    imageUrl: '/assets/images/art/painting-1.jpg',
  },
  {
    id: 2,
    title: 'Early morning by the beach',
    medium: 'Painting',
    imageUrl: '/assets/images/art/painting-2.jpg',
  },
  {
    id: 3,
    title: 'Train ride',
    medium: 'Painting',
    imageUrl: '/assets/images/art/painting-3.jpg',
  },
  {
    id: 4,
    title: 'Sadie Sink',
    medium: 'Sketch',
    imageUrl: '/assets/images/art/sketch-1.jpg',
  },
];
