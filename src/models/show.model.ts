export interface ShowWrapper {
  score: number;
  show: Show;
}

export interface Show {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  genres: string[];
}
