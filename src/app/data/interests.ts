export interface MapStation {
  name: string;
  note: string;
}

export interface RoutePoint {
  x: number;
  y: number;
  station?: string;
}

export interface MapLine {
  name: string;
  color: string;
  route: RoutePoint[];
}

export interface MapArea {
  kind: 'water' | 'park';
  path: string;
}

export const INTEREST_GRID = { cols: 40, rows: 25 };

export const INTEREST_STATIONS: Record<string, MapStation> = {
  sonic: {
    name: 'Sonic the Hedgehog',
    note: "Sega's speedy blue hedgehog and his loop-filled worlds.",
  },
  splatoon: { name: 'Splatoon', note: "Nintendo's colorful ink-shooting turf wars." },
  stardewValley: {
    name: 'Stardew Valley',
    note: 'Farming, fishing and small-town life at my own pace.',
  },
  frieren: {
    name: "Frieren: Beyond Journey's End",
    note: 'A quiet fantasy story about time, memory and what comes after the adventure.',
  },
  onePiece: {
    name: 'One Piece',
    note: "Luffy and the Straw Hat crew's long voyage across the Grand Line.",
  },
  piano: { name: 'Piano', note: 'Learning songs and playing for fun.' },
  reading: { name: 'Reading', note: 'Books that pull me into a story or teach me something new.' },
  legos: { name: 'Legos', note: 'Building sets brick by brick, then figuring out my own designs.' },
  soccer: { name: 'Football / Soccer', note: 'Playing and watching the beautiful game.' },
  psychology: { name: 'Psychology', note: 'How people think, learn and make decisions.' },
  science: { name: 'Science', note: 'Curious about how the world works, from space to biology.' },
  urbanPlanning: {
    name: 'Urban Planning',
    note: 'How cities are laid out, and what makes them good places to live.',
  },
  architecture: {
    name: 'Architecture',
    note: 'Buildings, structures and the design choices behind them.',
  },
  traveling: { name: 'Traveling', note: 'Exploring new places, cities and food.' },
  trains: {
    name: 'Trains',
    note: 'Rail lines, transit systems and the maps that tie them together.',
  },
  modeling: { name: '3D Modeling', note: 'Shaping objects and scenes in 3D.' },
  programming: { name: 'Programming', note: 'Building things with code, on and off the clock.' },
  sketching: { name: 'Sketching', note: 'Quick drawings and ideas on paper.' },
  painting: { name: 'Painting', note: 'Working with color, from studies to finished pieces.' },
  gym: { name: 'Gym', note: 'Lifting and staying consistent.' },
  tennis: { name: 'Tennis', note: 'Rallies, serves and chasing down every ball.' },
  volleyball: { name: 'Volleyball', note: 'Beach and indoor games with friends.' },
  swimming: { name: 'Swimming', note: 'Laps in the pool and time in the ocean.' },
  fishing: { name: 'Fishing', note: 'Early mornings on the water, waiting for a bite.' },
};

export const INTEREST_LINES: MapLine[] = [
  {
    name: 'Entertainment',
    color: 'var(--c-coral)',
    route: [
      { x: 4, y: 11, station: 'piano' },
      { x: 8, y: 11, station: 'sonic' },
      { x: 12, y: 11, station: 'legos' },
      { x: 16, y: 11, station: 'splatoon' },
      { x: 20, y: 11, station: 'reading' },
      { x: 24, y: 11, station: 'stardewValley' },
      { x: 28, y: 11, station: 'soccer' },
      { x: 32, y: 11, station: 'onePiece' },
      { x: 36, y: 11, station: 'frieren' },
    ],
  },
  {
    name: 'General',
    color: 'var(--c-cyan)',
    route: [
      { x: 12, y: 7, station: 'architecture' },
      { x: 16, y: 7, station: 'psychology' },
      { x: 20, y: 7 },
      { x: 20, y: 11, station: 'reading' },
      { x: 20, y: 15, station: 'science' },
      { x: 20, y: 19 },
      { x: 24, y: 19, station: 'urbanPlanning' },
      { x: 28, y: 19, station: 'traveling' },
      { x: 32, y: 19, station: 'trains' },
    ],
  },
  {
    name: 'Creative',
    color: 'var(--c-sun)',
    route: [
      { x: 12, y: 3, station: 'modeling' },
      { x: 12, y: 7, station: 'architecture' },
      { x: 12, y: 11, station: 'legos' },
      { x: 12, y: 15, station: 'programming' },
      { x: 12, y: 19, station: 'sketching' },
      { x: 12, y: 23, station: 'painting' },
    ],
  },
  {
    name: 'Active',
    color: 'var(--c-seafoam)',
    route: [
      { x: 36, y: 3, station: 'gym' },
      { x: 32, y: 3, station: 'tennis' },
      { x: 28, y: 3 },
      { x: 28, y: 7, station: 'volleyball' },
      { x: 28, y: 11, station: 'soccer' },
      { x: 28, y: 15, station: 'swimming' },
      { x: 28, y: 19, station: 'traveling' },
      { x: 28, y: 23, station: 'fishing' },
    ],
  },
];

export const INTEREST_AREAS: MapArea[] = [
  {
    kind: 'water',
    path: 'M30.5 25 C32.5 23.8 34.5 24.2 36.5 23.5 S39 22.9 40 22.7 V25 Z',
  },
  {
    kind: 'park',
    path: 'M15.6 1.5 H24.4 Q25 1.5 25 2.1 V3.9 Q25 4.5 24.4 4.5 H15.6 Q15 4.5 15 3.9 V2.1 Q15 1.5 15.6 1.5 Z',
  },
  {
    kind: 'park',
    path: 'M4.1 14.5 H8.4 Q9 14.5 9 15.1 V19.9 Q9 20.5 8.4 20.5 H4.1 Q3.5 20.5 3.5 19.9 V15.1 Q3.5 14.5 4.1 14.5 Z',
  },
];
