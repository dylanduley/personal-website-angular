export interface Artwork {
  id: number;
  title: string;
  medium: string;
  imageUrl: string;
  note?: string;
}

export const ARTWORKS: Artwork[] = [
  {
    id: 1,
    title: 'Portrait during the fall',
    medium: 'Digital painting',
    imageUrl: 'assets/images/art/painting-1.jpg',
    note: 'soft light, one pop of color'
  },
  {
    id: 2,
    title: 'Early morning by the beach',
    medium: 'Digital painting',
    imageUrl: 'assets/images/art/painting-2.jpg',
    note: 'playing with bokeh + cool tones'
  },
  {
    id: 3,
    title: 'Train ride sketches',
    medium: 'Digital painting',
    imageUrl: 'assets/images/art/painting-3.jpg',
    note: 'sketching on the train'
  },
  {
    id: 4,
    title: 'Sadie Sink',
    medium: 'Graphite sketch',
    imageUrl: 'assets/images/art/sketch-1.jpg',
    note: 'pencil study'
  }
];
